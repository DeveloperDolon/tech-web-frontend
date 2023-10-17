
import bannerImg from "../../../assets/bannerimg.png";

const Banner = () => {

return (
    <div className="max-w-7xl mx-auto lg:px-0 px-5 text-white  md:h-screen h-auto grid md:grid-cols-2 grid-cols-1 items-center gap-10">
        <div>
            <h1
            style={{ lineHeight: "50px" }} 
            className=" md:text-5xl text-4xl tracking-widest title-text md:py-0 pt-14">Watt&apos;s Next<span className="font-bold text-red-600">?</span> Exploring Tech & <span className="font-bold text-red-600">Electronics</span> Innovations</h1>

            <p className="md:text-base text-sm mt-8 md:leading-relaxed leading-relaxed">
                Welcome to Tech, your one-stop destination for all things technology and electronics. Discover the latest gadgets, stay updated on cutting-edge innovations, and dive into the fascinating realms of electronics and beyond. Join us on a journey through the digital cosmos, where knowledge meets curiosity, and the future is just a click away.
            </p>

            <div className="mt-5">
                <button className="btn bg-zinc-700 text-white hover:text-black">View More</button>
            </div>
        </div>

        <div>
            <div className="w-fit bg-slate-200 text-black px-5 py-3 rounded-lg shadow-white shadow-lg float-right">
                <h1 style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}} className="text-3xl font-semibold pb-3">Discount up to 30%</h1>
                <h2>You can get up to 30 percent <br /> discount from here.</h2>
            </div>
            <img src={bannerImg} alt="" />
        </div>
    </div>
);
};

export default Banner;