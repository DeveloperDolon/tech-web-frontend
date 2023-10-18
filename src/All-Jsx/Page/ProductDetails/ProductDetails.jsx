import { useLoaderData } from "react-router-dom";
import NavBar from "../../Component/Navbar/NavBar";
import Rating from "react-rating";


const ProductDetails = () => {

    const product = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto lg:px-0 px-5">
            <div>
                <NavBar></NavBar>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:mt-32 my-20">

                <div className="flex justify-center">
                    <img className="w-[60%]" src={product.image} alt="" />
                </div>

                <div className="col-span-2">
                    <h1 className="text-3xl font-semibold md:mt-0 mt-7">{product.name}</h1>
                    

                    <div className="flex flex-wrap my-5 gap-5">
                        <h2 className="px-5 py-2 bg-orange-500 text-white rounded-3xl">Price : <span className="font-bold font-sans">{product.price}</span></h2>
                        <h2 className="px-5 py-2 bg-red-500 text-white rounded-3xl">Brand : <span className="font-bold font-sans">{product.brandName}</span></h2>
                        <h2 className="px-5 py-2 bg-violet-500 text-white rounded-3xl">Category : <span className="font-bold font-sans">{product.type}</span></h2>
                    </div>
                    <div className="flex gap-5 items-center">
                        <span className="font-bold">Ratings : </span>
                        <Rating
                        className="my-3"
                        initialRating={product.rating}
                    />
                    </div>

                    <div className="space-x-8 mt-3">
                        <button className="btn bg-indigo-500 text-white hover:bg-slate-600">Add to Cart</button>
                        <button className="btn bg-amber-500 text-white">Update</button>
                    </div>
                </div>
            </div>

            <div className="mb-28 mt-10">
                <h1 className="text-4xl font-bold mb-4">More About {product.name}</h1>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;