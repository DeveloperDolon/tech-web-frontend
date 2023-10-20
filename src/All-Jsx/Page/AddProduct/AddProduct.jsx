import Swal from "sweetalert2";
import NavBar from "../../Component/Navbar/NavBar";
import ParticleBackground from "../../ParticleJs/ParticleBackground";
import Footer from "../../Component/Footer/Footer";
const AddProduct = () => {
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

        fetch("https://tech-web-backend-pt5se95zo-dolons-projects.vercel.app/brands", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire(
                    'Product added successful!',
                    'You clicked the button!',
                    'success'
                )
            });

        e.target.name.value = "";
        e.target.brand.value = "";
        e.target.type.value = "";
        e.target.rating.value = "";
        e.target.price.value = "";
        e.target.description.value = "";
        e.target.photo.value = "";
    }

    return (
        <div className="">
            <div className="max-w-7xl mx-auto text-white">
                <NavBar></NavBar>
            </div>
            <ParticleBackground></ParticleBackground>
            <div className="max-w-7xl mx-auto lg:px-0 px-5 my-10">

                <div className="sm:px-14 sm:py-14 px-5 py-14 rounded-lg my-10">
                    <h1 className="title-text text-4xl text-white text-center font-semibold">Add New Product</h1>
                    <p className="my-8 md:px-20 text-white leading-relaxed text-center">
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>

                    <form onSubmit={handleAddingProduct}>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="space-y-7">
                                <label className="block space-y-5 font-bold" htmlFor="name">Name <br />
                                    <input placeholder="Enter Product Name" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="name" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="brand">Brand Name <br />
                                    <select name="brand" className="select w-full block text-gray-400 font-normal text-base">
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
                                    <input placeholder="Enter Product Type" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="type" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="rating">Rating <br />
                                    <input placeholder="Enter Rating Count" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="rating" id="" />
                                </label>
                            </div>

                            <div className="space-y-7">
                                <label className="block space-y-5 font-bold" htmlFor="price">Price <br />
                                    <input placeholder="Enter Product Price" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="price" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="photo">Photo URL <br />
                                    <input placeholder="Enter photo URL" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="photo" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="description">Description <br />
                                    <textarea placeholder="Enter coffee details" className="block  w-full py-3 px-3 font-normal text-gray-400 rounded-md h-[168px]" type="text" name="description" id="" />
                                </label>
                            </div>
                        </div>

                        <div className="mt-7">
                        </div>

                        <div className="mt-10 flex justify-center">
                            <input className="title-text w-fit px-10 bg-sky-400 text-black py-3 rounded-md text-2xl cursor-pointer hover:bg-neutral-400 duration-300" type="submit" value="Add Product" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer className="bg-white"></Footer>
        </div>
    );
};

export default AddProduct;