import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images-removebg-preview.png";
import { FaShoppingCart } from 'react-icons/fa';
import { BiLogOutCircle } from 'react-icons/bi';
import { useContext, useState } from "react";
import { DataContext } from "../../Context-Api/Data-Context";
import defaultUser from "../../../assets/user.png";
import Swal from "sweetalert2";

const NavBar = () => {
    const {user, logOut, setTheme, theme} = useContext(DataContext);
    const [showUserOption, setShowUserOption] = useState(false);

    const navBars = <>
        <li><NavLink className="font-semibold" to="/">Home</NavLink></li>
        <li><NavLink className="font-semibold" to="/add_products">Add Product</NavLink></li>
        <li><NavLink className="font-semibold" to="/jd">About Us</NavLink></li>
        <li><NavLink className="font-semibold" to="/jd">Contact Us</NavLink></li>
        <li><NavLink className="font-semibold" to="/jd">Blog</NavLink></li>
    </>;

    const handleSignOut = () => {
        logOut()
        .then(() => {
            Swal.fire(
                'Log out Successful!',
                'You clicked the button!',
                'success'
              )
        }).catch(err => console.log(err));
    }

    const handleThemeChange = (e) => {
        const htmlContainer = document.querySelector("#html");
        if(e.target.id === 'day-night') {
            if(htmlContainer.getAttribute("data-theme") === "dark") {
                htmlContainer.setAttribute("data-theme", "light");
                setTheme(true);
                return;
            }
            htmlContainer.setAttribute("data-theme", "dark");
            setTheme(false);
        }
    }

    return (
        <>
            <div className={`navbar relative`}>
                <div className="navbar-start">
                    <div className={`dropdown z-40 ${theme ? "text-black" : "text-white"}`}>
                        <label tabIndex={0} className="btn sm:px-3 px-1 btn-ghost  lg:hidden bg-white text-black hover:bg-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52 ${theme ? "shadow" : "shadow-white shadow"}`}>
                           {navBars}
                        </ul>
                    </div>
                    <div>
                        <img className="md:w-[120px] w-[60px]" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navBars}
                    </ul>
                </div>
                <div className="navbar-end sm:gap-5 gap-3 flex-wrap">
                    <div className="text-center">
                    <label
                            onClick={handleThemeChange}
                            className="swap swap-rotate p-3 rounded-full shadow-md bg-slate-200">

                            <input id="day-night" type="checkbox" />

                            <svg className="swap-on lg:w-6 lg:h-6 md:h-8 md:w-8 w-3 h-3"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            <svg className="swap-off lg:w-6 lg:h-6 md:w-8 md:h-8 w-3 h-3"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>

                        </label>
                    </div>
                    <NavLink to="/carts"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-sky-500 md:text-2xl text-xl" : "md:text-2xl text-xl"
                    }
                    ><FaShoppingCart></FaShoppingCart></NavLink>

                    { 
                        user ?
                        <>
                            <div>
                                <img onClick={() => setShowUserOption(!showUserOption)} className="md:w-12 w-9 rounded-full cursor-pointer" src={user.photoURL ? user.photoURL : defaultUser} alt="" />

                                <div className={`absolute duration-300 ease-in right-1 top-[80%] ${showUserOption ? "px-6 py-7 w-auto" : "w-0 h-0"} overflow-hidden bg-white shadow-xl rounded-xl z-40`}>
                                    <ul className="space-y-2">
                                        <li className="md:text-base text-sm font-semibold text-black">{user.displayName}</li>
                                        <li className="md:text-base text-sm font-semibold"><button onClick={handleSignOut} className="flex gap-2 items-center btn btn-sm"><BiLogOutCircle className="md:text-xl text-lg"></BiLogOutCircle> Log out</button></li>
                                    </ul>
                                </div>
                            </div>
                        </> : 
                         <Link to="/login" className="btn-primary sm:py-2 py-1 sm:px-5 px-2 rounded-md font-semibold md:text-base text-xs text-white capitalize">Login</Link>
                    }

                </div>
            </div>
        </>
    );
};

export default NavBar;