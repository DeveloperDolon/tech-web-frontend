
import NavBar from "../../Component/Navbar/NavBar";
import { useEffect, useState } from "react";
import Footer from "../../Component/Footer/Footer";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import animationData from "../../../../public/animation_lny9azlu.json";
import { DataContext } from "../../Context-Api/Data-Context";
import { useContext } from "react";

const CartPage = () => {
    const {setCartToolTip, cartToolTip, user} = useContext(DataContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [count, setCount] = useState(1);
    const [cartProduct, setCartProduct] = useState([]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {

        fetch(`http://localhost:5000/cart/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCartProduct(data);
            });
    }, [count])

    useEffect(() => {
        let totalpp = 0;
        cartProduct?.forEach(product => {
            const newTotal = totalpp + product.price;
            totalpp = newTotal;
        })
        setTotalPrice(totalpp);
    }, [cartProduct, count]);

    const handleRemoveItem = (id) => {
        const prodId = {id: id};
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/cart/${user.email}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(prodId)

                }).then(() => {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    setCount(count + 1);
                    setCartToolTip(cartToolTip + 1);
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Cancelled...',
                    text: 'Your imaginary product is safe!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }).catch(err => console.log(err));
    }

    const handleOrder = () => {

        fetch(`http://localhost:5000/cart/alldelete/${user.email}`, {
            method: "DELETE",
        }).then(() => {
            Swal.fire(
                'Order Complete!',
                'Your order has been taken!!',
                'success'
            )
        }).catch(err => console.log(err));
        setCount(count + 1);
        setCartToolTip(cartToolTip + 1);
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>
            </div>

            <div className="max-w-7xl mx-auto md:mt-28 mt-20 lg:px-0 px-5">
                <h1 className="title-text md:text-5xl text-3xl font-bold">Shopping Cart</h1>
            </div>


            {
                cartProduct.length > 0 ? <div className="max-w-7xl mx-auto md:px-40 sm:px-10 px-2 grid grid-cols-1 mb-20 md:mb-32 mt-16 bg-sky-100 rounded-2xl md:py-20 py-16 gap-7">
                    {
                        cartProduct?.map(product =>
                            <>
                                <div key={product._id} className="grid grid-cols-4  items-center gap-5 bg-white rounded-lg py-3 px-7">
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
                                            <button onClick={() => handleRemoveItem(product._id)} className="sm:btn w-fit rounded-lg p-1 sm:btn-sm float-left capitalize sm:text-sm text-[8px] sm:bg-red-500 bg-red-500 sm:text-white text-white hover:text-red-500">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </>)
                    }

                    <div className="border-black mt-4 border-t-2">
                        <h1 className="title-text text-4xl my-5">Total Price : {totalPrice} TK</h1>
                        <div>
                            <button onClick={handleOrder} className="btn bg-yellow-400">Order Now</button>
                        </div>
                    </div>
                </div> : <div className="md:h-[90vh] flex justify-center items-center flex-col lg:my-0 my-16">

                        <Lottie
                                className="md:w-[30%] w-[80%] mx-auto"
                                options={defaultOptions}
                                animationData={animationData}
                                height={200}
                                width={200}
                        ></Lottie>
                        <h1 className="md:text-4xl text-2xl title-text font-bold my-5 text-error">Your cart is Empty!</h1>
                </div>
            }

            <Footer></Footer>
        </div>
    );
};

export default CartPage;