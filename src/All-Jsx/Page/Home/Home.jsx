
import { useEffect } from "react";
import Banner from "../../Component/Banner/Banner";
import AOS from "aos";
import 'aos/dist/aos.css';
import NavBar from "../../Component/Navbar/NavBar";
import bgImg from "../../../assets/bg-img.jpg";
import { useLoaderData, useNavigate } from "react-router-dom";


const Home = () => {

    const brands = useLoaderData();
    const navigate = useNavigate();

    const handleClick = (name) => {
        navigate(`brands/${name}`);
    }    

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    });

    return (
        <div>
            <div style={{
                background: `url("${bgImg}") top center no-repeat`,
                backgroundSize: "cover"
            }}
            className="md:h-screen h-auto md:bg-cover"
            >
                <div className="max-w-7xl mx-auto">
                    <NavBar className="text-white"></NavBar>
                </div>

                <div>
                    <Banner></Banner>
                </div>

                <div className="md:my-32 my-20">
                    <h1 className="md:text-5xl text-3xl text-center font-bold title-text">Our All Brands</h1>

                    <div className="max-w-7xl mx-auto lg:px-0 px-5 mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
                        {
                            brands.map(item => <>
                                <div onClick={() => handleClick(item.name)} key={item.id} className={`bg-[#e3f5ff] rounded-xl px-7 py-10 cursor-pointer`}>
                                    <div className="flex justify-center">
                                        <img className={`${item.id === 2 || item.id === 1 ? "h-32" : "h-52"} md:w-[50%] w-full rounded-lg`} src={item.image} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="text-center pt-5 text-4xl font-semibold">{item.name}</h1>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;