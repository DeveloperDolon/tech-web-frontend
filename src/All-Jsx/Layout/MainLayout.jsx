import { Outlet } from "react-router-dom";
import NavBar from "../Component/Navbar/NavBar";
import AOS from "aos";
import 'aos/dist/aos.css';


const MainLayout = () => {

    AOS.init();

    return (
        <div>

            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>
            </div>

            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;