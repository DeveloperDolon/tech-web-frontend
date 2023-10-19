
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
        <div className="">
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
                                <div data-aos="flip-left" onClick={() => handleClick(item.name)} key={item.id} className={`bg-[#e3f5ff] rounded-xl px-7 py-10 cursor-pointer`}>
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

                <div className=" bg-gray-200 overflow-x-hidden">
                    <div className="py-10 max-w-7xl mx-auto md:px-2 px-5">

                        <div id="features" className="mx-auto max-w-6xl">
                            <p className="text-center text-base font-semibold leading-7 text-primary-500">Features</p>
                            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                                Writing has never been so easy
                            </h2>
                            <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                                <li data-aos="fade-left" className="rounded-xl bg-white px-6 py-8 shadow-sm">

                                    <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10" />
                                    <h3 className="my-3 font-display font-medium">Product Catalog</h3>
                                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                                        the cutting-edge language model that makes interactions a breeze. With its user-friendly interface,
                                        effortlessly tap into the world of AI-generated text.
                                    </p>

                                </li>
                                <li data-aos="fade-right" className="rounded-xl bg-white px-6 py-8 shadow-sm">

                                    <img src="https://www.svgrepo.com/show/530442/port-detection.svg"
                                        alt="" className="mx-auto h-10 w-10" />
                                    <h3 className="my-3 font-display font-medium">User Accounts</h3>
                                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                                        Simply input your subject, click the generate button, and the result will appear in seconds just like
                                        magick.
                                    </p>

                                </li>
                                <li data-aos="fade-left" className="rounded-xl bg-white px-6 py-8 shadow-sm">
                                    <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="" className="mx-auto h-10 w-10" />
                                    <h3 className="my-3 font-display font-medium">Custom settings</h3>
                                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                                        We offer advanced customization. You can freely combine options like roles, languages, publish, tones,
                                        lengths,
                                        and formats.
                                    </p>

                                </li>
                                <li data-aos="fade-right" className="rounded-xl bg-white px-6 py-8 shadow-sm">
                                    <a className="group">
                                        <img src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" />
                                        <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Free trial</h3>
                                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">We offer a free trial service without login. We
                                            provide
                                            many payment options including pay-as-you-go and subscription.</p>
                                    </a>
                                </li>
                                <li data-aos="fade-left" className="rounded-xl bg-white px-6 py-8 shadow-sm">
                                    <a className="group">
                                        <img src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" className="mx-auto h-10 w-10" />
                                        <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                                            Online Payment
                                        </h3>
                                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">We offer many templates covering areas such as
                                            writing,
                                            education, lifestyle and creativity to inspire your potential. </p>
                                    </a>
                                </li>
                                <li data-aos="fade-right" className="rounded-xl bg-white px-6 py-8 shadow-sm">
                                    <a className="group">
                                        <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-10 w-10" />
                                        <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Use Anywhere</h3>
                                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">Our product is compatible with multiple platforms
                                            including Web, Chrome, Windows and Mac, you can use MagickPen anywhere.</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
