import { useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "../../Component/Navbar/NavBar";
import ParticleBackground from "../../ParticleJs/ParticleBackground";
import Swal from "sweetalert2";
import Footer from "../../Component/Footer/Footer";

const UpdateProduct = () => {
    const navigate = useNavigate();

    const data = useLoaderData();

    const handleAddingProduct = (e) => {

        e.preventDefault();

        const name = e.target.name.value;
        const brandName = e.target.brand.value;
        const type = e.target.type.value;
        const rating = parseInt(e.target.rating.value);
        const price = parseInt(e.target.price.value);
        const description = e.target.description.value;
        const image = e.target.photo.value;

        const productInfo = { name, brandName, type, rating, price, description, image };

        fetch(`https://tech-web-backend-pt5se95zo-dolons-projects.vercel.app/products/${data.name}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire(
                    'Product update successful!',
                    'You clicked the button!',
                    'success'
                )
                navigate(-1);
            });

        // e.target.name.value = "";
        // e.target.brand.value = "";
        // e.target.type.value = "";
        // e.target.rating.value = "";
        // e.target.price.value = "";
        // e.target.description.value = "";
        // e.target.photo.value = "";
    }

    return (
        <div className="">
            <div className="max-w-7xl mx-auto text-white">
                <NavBar></NavBar>
            </div>
            <ParticleBackground></ParticleBackground>
            <div className="max-w-7xl mx-auto lg:px-0 px-5 my-10">

                <div className="sm:px-14 sm:py-14 px-5 py-14 rounded-lg my-10 text-white">
                    <h1 className="title-text text-4xl text-center font-semibold mb-14">Update Product</h1>

                    <form onSubmit={handleAddingProduct}>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="space-y-7">
                                <label className="block space-y-5 font-bold" htmlFor="name">Name <br />
                                    <input placeholder="Enter Product Name" defaultValue={data.name} className="block text-black w-full py-3 px-3 font-normal rounded-md" type="text" name="name" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="brand">Brand Name <br />
                                    <select name="brand" defaultValue={data.brandName} className="select w-full block text-gray-500 font-normal text-base">
                                        <option disabled selected>Select brand name</option>
                                        <option>Samsung</option>
                                        <option>Acer</option>
                                        <option>Apple</option>
                                        <option>Intel</option>
                                        <option>Vivo</option>
                                        <option>Sony</option>
                                    </select>
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="type">Product Type <br />
                                    <input placeholder="Enter Product Type" defaultValue={data.type} className="block text-black w-full py-3 px-3 font-normal rounded-md" type="text" name="type" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="rating">Rating <br />
                                    <input placeholder="Enter Rating Count" defaultValue={data.rating} className="block text-black w-full py-3 px-3 font-normal rounded-md" type="text" name="rating" id="" />
                                </label>
                            </div>

                            <div className="space-y-7">
                                <label className="block space-y-5 font-bold" htmlFor="price">Price <br />
                                    <input placeholder="Enter Product Price" defaultValue={data.price} className="block text-black w-full py-3 px-3 font-normal rounded-md" type="text" name="price" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="photo">Photo URL <br />
                                    <input placeholder="Enter photo URL" defaultValue={data.image} className="block text-black w-full py-3 px-3 font-normal rounded-md" type="text" name="photo" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="description">Description <br />
                                    <textarea placeholder="Enter coffee details" defaultValue={data.description} className="block text-black w-full py-3 px-3 font-normal rounded-md h-[168px]" type="text" name="description" id="" />
                                </label>
                            </div>
                        </div>

                        <div className="mt-7">
                        </div>

                        <div className="mt-10 flex justify-center">
                            <input className="title-text w-fit px-10 bg-sky-400 text-black py-3 rounded-md text-2xl cursor-pointer hover:bg-neutral-400 duration-300" type="submit" value="Update Product" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer className="bg-white">
            </Footer>
        </div>
    )
};

export default UpdateProduct;