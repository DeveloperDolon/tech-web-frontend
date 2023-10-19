

const Banner = () => {

return (
    <div className="max-w-7xl mx-auto lg:px-0 px-5  md:h-[calc(100vh-69px)] h-auto grid md:grid-cols-2 grid-cols-1 items-center gap-10">
        <div>
            <h1
            data-aos="fade-left"
            style={{ lineHeight: "50px" }} 
            className=" md:text-5xl text-4xl tracking-widest title-text font-semibold md:py-0 pt-14">Watt&apos;s Next<span className="font-bold text-red-600">?</span> Exploring Tech & <span className="font-bold text-red-600">Electronics</span> Innovations</h1>

            <p data-aos="fade-right" className="md:text-3xl font-semibold mt-8">
                Welcome to Tech, your one-stop destination for all things technology and electronics.
            </p>

            <div className="mt-5">
                <button className="btn bg-zinc-700 text-white hover:text-black">View More</button>
            </div>
        </div>

    </div>
);
};

export default Banner;