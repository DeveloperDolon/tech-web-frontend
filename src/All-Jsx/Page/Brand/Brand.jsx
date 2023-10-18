import { useLoaderData } from "react-router-dom";
import NavBar from "../../Component/Navbar/NavBar";
import Product from "../../Component/Product/Product";

const Brand = () => {

    const product = useLoaderData();

    return (
        <div>
            <div className="">
                <div className="max-w-7xl mx-auto">
                    <NavBar></NavBar>
                </div>
            </div>
            <div className="max-w-7xl mx-auto gap-8 lg:px-0 px-5 grid grid-cols-1 md:my-20 my-10 my md:grid-cols-2">
                {
                    product.map(item => <Product key={item.id} data={item}></Product> )
                }
            </div>
        </div>
    );
};

export default Brand;