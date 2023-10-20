import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MainLayout = () => {

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/") {
            document.title = "Tech | Home";
        } else if(location.pathname === "/add_products") {
            document.title = "Tech | Add Product";
        } else if(location.pathname === "/login") {
            document.title = "Tech | Login";
        } else if(location.pathname === "/sign_up") {
            document.title = "Tech | Sign Up";
        } else if(location.pathname === "/carts") {
            document.title = "Tech | Carts";
        }
    }, [location.pathname]);

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    });

    return (
        <>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainLayout;