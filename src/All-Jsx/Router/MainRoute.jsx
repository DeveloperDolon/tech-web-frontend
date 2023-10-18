import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch("http://localhost:5000/brands"),
                element: <Home></Home>
            }
        ]
    }
])

export default MainRoute;