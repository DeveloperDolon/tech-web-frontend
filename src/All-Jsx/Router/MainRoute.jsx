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
import ProductDetails from "../Page/ProductDetails/ProductDetails";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import CartPage from "../Page/Cart/CartPage";


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
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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
            },
            {
                path: "/products/:id",
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path: "/*",
                element: <ErrorPage></ErrorPage>
            },
            {
                path: "/carts",
                element: <PrivateRoute><CartPage></CartPage></PrivateRoute>
            }
        ]
    }
])

export default MainRoute;