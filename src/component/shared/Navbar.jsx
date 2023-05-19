import { Link } from "react-router-dom";
import img from "../../assets/img.png";
import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward, IoIosCart } from "react-icons/io";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showUserName, setShowUserName] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    const navItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/allToys">All Toys</Link>
            </li>
        </>
    );
    return (
        <div className="bg-base-100">
            <div className="navbar py-3">
                <div className="navbar-start pl-2 sm:pl-6">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="cursor-pointer lg:hidden"
                        >
                            <GiHamburgerMenu className="h-8 w-8 mr-4" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-sm w-52"
                        >
                            {navItems}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="flex flex-col justify-center items-center"
                    >
                        <img
                            className="h-12 w-12"
                            src={img}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navItems}</ul>
                </div>
                <div className="navbar-end sm:pr-6 pr-2">
                    {user ? (
                        <div className="dropdown dropdown-end rounded-sm drop-shadow-md z-50">
                            <label
                                tabIndex={0}
                                className="cursor-pointer mr-4"
                            >
                                <img
                                    className="h-12 w-12 mask mask-circle object-cover"
                                    src={user.photoURL}
                                    alt="profile image"
                                    onMouseEnter={() => setShowUserName(true)}
                                    onMouseLeave={() => setShowUserName(false)}
                                    title={showUserName ? user.displayName : ""}
                                />
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content p-2 w-36 shadow bg-base-100 rounded-sm mt-4 flex flex-col gap-2 z-50"
                            >
                                <p className="text-sm">{user.displayName}</p>
                                <hr className="mb-3" />
                                <Link>
                                    <button className="btn b rounded-sm text-white w-full">
                                        Profile
                                    </button>
                                </Link>
                                <Link to="/myToys">
                                    <button className="btn  rounded-sm text-white w-full">
                                        My Toys
                                    </button>
                                </Link>
                                <Link to="/addAToys">
                                    <button className="btn  rounded-sm text-white w-full">
                                        Add Toy
                                    </button>
                                </Link>
                                <Link>
                                    <button
                                        className="btn btn-error rounded-sm text-white w-full"
                                        onClick={handleLogOut}
                                    >
                                        Log Out
                                    </button>
                                </Link>
                            </ul>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-error rounded-sm text-white">Login</button>
                        </Link>
                    )}
                </div>
            </div>
            <div className="px-4 sm:px-10 py-2 bg-blue-400">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search Products"
                        className="input input-bordered input-error w-2/3 rounded-none rounded-l-sm"
                    />
                    <button className="btn btn-error rounded-r-sm rounded-none">
                        <FaSearch />
                    </button>
                    <div className="text-white text-sm flex ml-2 items-center gap-2">
                        <p>Sale!</p>
                        <IoIosArrowForward />
                        <p>New Items</p>
                        <IoIosArrowForward />
                        <p>Best Seller</p>
                        <IoIosArrowForward />
                    </div>
                    <button
                        className="text-gray-800 mx-2 text-2xl"
                        title="go to cart"
                    >
                        <IoIosCart />
                    </button>
                </div>
            </div>
            <div className="bg-blue-300 sm:flex grid grid-cols-2 justify-center text-sm text-white shadow-md">
                <p className="py-2 sm:py-3 px-4 hover:bg-slate-600 duration-100 cursor-pointer">
                    New Figures
                </p>
                <p className="py-2 sm:py-3 px-4 hover:bg-slate-600 duration-100 cursor-pointer">
                    Scale Figures
                </p>
                <p className="py-2 sm:py-3 px-4 hover:bg-slate-600 duration-100 cursor-pointer">
                    Nendoroid & Mini Figures
                </p>
                <p className="py-2 sm:py-3 px-4 hover:bg-slate-600 duration-100 cursor-pointer">
                    Free Standard Shipping
                </p>
                <p className="py-2 sm:py-3 px-4 hover:bg-slate-600 duration-100 cursor-pointer">
                    Fate Series
                </p>
                <p className="py-2 sm:py-3 px-4 hover:bg-slate-600 duration-100 cursor-pointer">
                    Gundam Series
                </p>
                <p className="py-2 sm:py-3 px-4 hover:bg-slate-600 duration-100 cursor-pointer">
                    Saekano Series
                </p>
                <p className="py-2 sm:py-3 px-4 hover:bg-slate-600 duration-100 cursor-pointer">
                    Bonus Points
                </p>
            </div>
        </div>
    );
};

export default Navbar;
