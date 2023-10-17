import { Outlet } from "react-router-dom";
import NavBar from "../Component/Navbar/NavBar";


const MainLayout = () => {



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