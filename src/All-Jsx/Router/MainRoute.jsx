import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Brand from "../Page/Brand/Brand";
import AddProduct from "../Page/AddProduct/AddProduct";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch("http://localhost:5000/brands"),
                element: <Home></Home>
            },
            {
                path: "/brands/:brandName",
                loader: ({params}) => fetch(`http://localhost:5000/brands/${params.brandName}`),
                element: <Brand></Brand>
            },
            {
                path: "/add_products",
                element: <AddProduct></AddProduct>
            }
        ]
    }
])

export default MainRoute;