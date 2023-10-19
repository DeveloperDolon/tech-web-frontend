import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../../Component/Navbar/NavBar";
import Product from "../../Component/Product/Product";
import { useEffect, useState } from "react";
import Slider from "../../Component/Slider/Slider";

const Brand = () => {
    const [brand, setBrand] = useState({});
    const product = useLoaderData();
    const {brandName} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/brand/${brandName}`)
        .then(res => res.json())
        .then(data => setBrand(data));
    }, []);

    return (
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
                    product.map(item => <Product key={item.id} data={item}></Product> )
                }
            </div>
        </div>
    );
};

export default Brand;