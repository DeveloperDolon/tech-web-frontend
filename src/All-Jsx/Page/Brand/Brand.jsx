import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../../Component/Navbar/NavBar";
import Product from "../../Component/Product/Product";
import { useEffect, useState } from "react";
import Slider from "../../Component/Slider/Slider";
import Footer from "../../Component/Footer/Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Lottie from "lottie-react";
import animationData from "../../../../public/animation_lnyfxio1.json";

const Brand = () => {
    const [brand, setBrand] = useState({});
    const product = useLoaderData();
    const { brandName } = useParams();
    console.log(product);

    useEffect(() => {
        fetch(`https://tech-web-backend-pt5se95zo-dolons-projects.vercel.app/brand/${brandName}`)
            .then(res => res.json())
            .then(data => setBrand(data));
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>Tech | {brandName}</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
                <div className="">
                    <div className="max-w-7xl mx-auto">
                        <NavBar></NavBar>

                        <div>
                            <h1 className="md:text-4xl text-2xl text-center font-semibold mt-5">Products of {brand.name}</h1>
                        </div>
                    </div>
                    <Slider images={brand.sliderImages} name={brand.name}></Slider>
                </div>

                <div className="max-w-7xl mx-auto gap-8 lg:px-0 px-5 grid grid-cols-1 md:my-20 my-10 my md:grid-cols-2">
                    {
                        product.length > 0 ? product?.map(item => <Product key={item.id} data={item}></Product>) : 
                        <div className="md:h-[70vh] flex justify-center items-center flex-col w-full md:col-span-2">
                            <Lottie
                                className="md:w-[40%] w-[60%] mx-auto"
                                options={defaultOptions}
                                animationData={animationData}
                                height={200}
                                width={200}
                        ></Lottie>
                        <h1 className="md:text-4xl text-2xl font-bold text-warning py-2">No Product Available</h1>
                        </div>
                    }
                </div>

                <Footer></Footer>
            </div>
        </HelmetProvider>
    );
};

export default Brand;