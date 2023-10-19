import { useLoaderData } from "react-router-dom";
import NavBar from "../../Component/Navbar/NavBar";
import { useEffect, useState } from "react";
import Footer from "../../Component/Footer/Footer";

const CartPage = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const cartProduct = useLoaderData();
    
    useEffect(() => {
        let totalpp = 0;
        cartProduct.forEach(product => {
            const newTotal = totalpp + product.price;
            totalpp = newTotal;
        })
        setTotalPrice(totalpp);
    }, [cartProduct])

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>
            </div>

            <div className="max-w-7xl mx-auto md:mt-28 mt-20">
                <h1 className="title-text md:text-5xl text-3xl font-bold">Shopping Cart</h1>
            </div>

            <div className="max-w-7xl mx-auto md:px-40 sm:px-10 px-2 grid grid-cols-1 mb-20 md:mb-32 mt-16 bg-sky-100 rounded-2xl md:py-20 py-16 gap-7">
                {
                    cartProduct.map(product =>
                        <>
                            <div key={product.id} className="grid grid-cols-4  items-center gap-5 bg-white rounded-lg py-3 px-7">
                                <div className="overflow-hidden">
                                    <img className="w-full md:h-40 sm:h-20 h-10 rounded-lg" src={product.image} alt="" />
                                </div>
                                <div className="col-span-3 grid grid-cols-3 items-center">
                                    <div className="text-left col-span-2">
                                        <h1 className="md:text-xl sm:text-base text-xs sm:font-semibold font-medium">{product.name}</h1>
                                        <p className="sm:font-semibold font-medium md:text-base sm:text-sm text-xs py-1">Brand : {product.brandName}</p>
                                    </div>

                                    <div className="flex flex-col items-end space-y-2">
                                        <p className="font-sans text-end md:text-lg sm:text-sm text-xs font-medium">Price : {product.price}TK</p>
                                        <button className="sm:btn w-fit rounded-lg p-1 sm:btn-sm float-left capitalize sm:text-sm text-[8px] sm:bg-red-500 bg-red-500 sm:text-white text-white hover:text-red-500">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </>)
                }

                <div className="border-black mt-4 border-t-2">
                    <h1 className="title-text text-4xl my-5">Total Price : {totalPrice} TK</h1>
                    <div>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>  
            <Footer></Footer>          
        </div>
    );
};

export default CartPage;