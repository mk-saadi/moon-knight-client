import { Link } from "react-router-dom";
import img from "../../assets/img.png";
import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

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

    const navMenu = (
        <>
            <Link to="/">
                <button className="btn btn-sm bg-transparent border-0 hover:bg-transparent focus:bg-transparent">
                    Home
                </button>{" "}
            </Link>
            <Link to="/blog">
                <button className="btn btn-sm bg-transparent border-0 hover:bg-transparent focus:bg-transparent">
                    Blog
                </button>{" "}
            </Link>
            <Link to="/allToys">
                <button className="btn btn-sm bg-transparent border-0 hover:bg-transparent focus:bg-transparent">
                    All Figures
                </button>
            </Link>
            {user && (
                <>
                    <Link to="/myToys">
                        <button className="btn btn-sm bg-transparent border-0 hover:bg-transparent focus:bg-transparent">
                            My Figures
                        </button>
                    </Link>
                    <Link to="/addAToys">
                        <button className="btn btn-sm bg-transparent border-0 hover:bg-transparent focus:bg-transparent">
                            Add New Figures
                        </button>
                    </Link>
                </>
            )}
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
                            {navMenu}
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
                    <ul className="menu menu-horizontal px-1">{navMenu}</ul>
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
                                className="menu dropdown-content p-2 w-48 shadow bg-base-100 rounded-sm mt-4 flex flex-col gap-2 z-50"
                            >
                                <p className="text-sm">{user.displayName}</p>
                                <hr className="mb-3" />
                                <Link to="#">
                                    <button className="btn b rounded-sm text-white w-full btn-sm text-xs sm:text-sm">
                                        Profile
                                    </button>
                                </Link>
                                <Link to="/addDB2">
                                    <button className="btn b rounded-sm text-white w-full btn-sm text-xs sm:text-sm">
                                        Add To 2nd DB
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
                            <button className="btn btn-info rounded-sm text-white">Login</button>
                        </Link>
                    )}
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
