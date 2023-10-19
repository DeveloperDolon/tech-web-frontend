import discountImg from "../../../assets/discountImg.png";

const DiscountBanner = () => {
    return (
        <div 
        className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-5 md:justify-items-start justify-items-center bg-sky-100 rounded-xl overflow-hidden md:py-12 py-9 md:px-24 px-12 items-center">
            <div className="md:col-span-2">
                <h1 className="md:text-5xl text-3xl font-bold title-text">Sale Up to 30% offer</h1>
                <p className="md:text-lg text-base font-semibold my-3">Apple Smart Phones</p>
                <button className="block btn bg-sky-500 text-white hover:text-black px-7">Read More</button>
            </div>

            <div>
                <img className="md:h-[350px] object-cover" src={discountImg} alt="" />
            </div>
        </div>
    );
};

export default DiscountBanner;