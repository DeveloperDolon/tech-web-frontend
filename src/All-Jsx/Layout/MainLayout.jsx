import { Outlet } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MainLayout = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    });

    return (
        <div>

            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;