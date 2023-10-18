import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Brand from "../Page/Brand/Brand";
import AddProduct from "../Page/AddProduct/AddProduct";
import UpdateProduct from "../Page/UpdateProduct/UpdateProduct";
import Login from "../Page/Login/Login";
import SignUp from "../Page/Signup/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            },
            {
                path: "/update/:id",
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute> 
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/sign_up",
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default MainRoute;