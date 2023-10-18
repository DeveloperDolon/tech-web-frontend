import PropTypes from "prop-types";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const Product = ({ data }) => {


    return (
        <div className="grid grid-cols-3 gap-6 bg-sky-100 py-7 rounded-lg px-6 items-center">
            <div>
                <img className="w-full" src={data.image} alt="" />
            </div>

            <div className="col-span-2">
                <h2 className="md:text-3xl text-lg font-semibold">{data.name}</h2>
                <div>
                    <p className="my-1 md:text-base text-sm">Brand : <span className="font-bold">{data.brandName}</span></p>
                    <p className="my-1 md:text-base text-sm">Type : <span className="font-bold">{data.type}</span></p>
                    <p className="my-1 md:text-base text-sm">Price : <span className="font-bold font-sans">{data.price} TK</span></p>
                    <Rating
                        initialRating={data.rating}
                    />
                    <br />
                    <div className="mt-2 flex gap-3">
                        <Link className="md:btn md:bg-sky-500 md:text-white btn-sm rounded-md font-semibold bg-sky-500 text-white hover:text-black">View Details</Link>

                        <Link className="md:btn md:bg-stone-400 md:text-white btn-sm rounded-md font-semibold bg-stone-400 text-white hover:text-black">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

Product.propTypes = {
    data: PropTypes.object
}