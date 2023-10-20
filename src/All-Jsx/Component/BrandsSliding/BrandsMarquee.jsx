

import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { DataContext } from "../../Context-Api/Data-Context";

const BrandsMarquee = () => {
    const {theme} = useContext(DataContext);

// className={`w-[400px] p-4 shadow-lg rounded-lg mr-10 ${theme ? "" : "bg-gray-600 text-white"}`}

    return (
        <div>
            <Marquee className="my-5 py-2">
                <div className={`w-[400px] p-4 shadow-lg rounded-lg mr-10 ${theme ? "" : "bg-gray-600 text-white"}`}>
                    <div className="flex flex-col items-center">
                        <div className="avatar">
                            <div className="w-12">
                                <img className="rounded-full" src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
                            </div>
                        </div>
                        <p className={`font-semibold lg:text-xl text-base lg:leading-6 leading-5 ${theme ? "text-gray-800" : "text-white"} mt-3`}>Lukate Bruslee</p>
                        <p className="font-sans text-sm mb-2 mt-1">12.07.2023</p>
                        <p className={`font-normal  md:text-base text-center text-sm leading-6 ${theme ? "text-gray-800" : "text-white"}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className={`w-[400px] p-4 shadow-lg rounded-lg mr-10 ${theme ? "" : "bg-gray-600 text-white"}`}>
                    <div className="flex flex-col items-center">
                        <div className="avatar">
                            <div className="w-12">
                                <img className="rounded-full" src="https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
                            </div>
                        </div>
                        <p className={`font-semibold lg:text-xl text-base lg:leading-6 leading-5 ${theme ? "text-gray-800" : "text-white"} mt-3`}>পোড়া মন শুক্কুর আলী</p>
                        <p className="font-sans text-sm mb-2 mt-1">12.07.2023</p>
                        <p className={`font-normal  md:text-base text-center text-sm leading-6 ${theme ? "text-gray-800" : "text-white"}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className={`w-[400px] p-4 shadow-lg rounded-lg mr-10 ${theme ? "" : "bg-gray-600 text-white"}`}>
                    <div className="flex flex-col items-center">
                        <div className="avatar">
                            <div className="w-12">
                                <img className="rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww" />
                            </div>
                        </div>
                        <p className={`font-semibold lg:text-xl text-base lg:leading-6 leading-5 ${theme ? "text-gray-800" : "text-white"} mt-3`}>Tom Crush</p>
                        <p className="font-sans text-sm mb-2 mt-1">12.07.2023</p>
                        <p className={`font-normal  md:text-base text-center text-sm leading-6 ${theme ? "text-gray-800" : "text-white"}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className={`w-[400px] p-4 shadow-lg rounded-lg mr-10 ${theme ? "" : "bg-gray-600 text-white"}`}>
                    <div className="flex flex-col items-center">
                        <div className="avatar">
                            <div className="w-12">
                                <img className="rounded-full" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww" />
                            </div>
                        </div>
                        <p className={`font-semibold lg:text-xl text-base lg:leading-6 leading-5 ${theme ? "text-gray-800" : "text-white"} mt-3`}>Nagin Paloyan</p>
                        <p className="font-sans text-sm mb-2 mt-1">12.07.2023</p>
                        <p className={`font-normal  md:text-base text-center text-sm leading-6 ${theme ? "text-gray-800" : "text-white"}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </Marquee >
        </div >
    );
};

export default BrandsMarquee;