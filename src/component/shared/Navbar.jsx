import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <div className="text-gray-700 flex gap-4 font-semibold">
            <Link to="/">
                <p>Home</p>{" "}
            </Link>
            <Link to="/blog">
                <p>Blog</p>
            </Link>
            <Link to="/allJewelry">
                <p>All Jewelries</p>
            </Link>
            {user && (
                <>
                    <Link to="/myToys">
                        <p>My Jewelries</p>
                    </Link>
                    <Link to="/addAToys">
                        <p>Add New Jewelry</p>
                    </Link>
                </>
            )}
        </div>
    );

    return (
        <div className="bg-slate-300">
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
                        Cosmos Jewelry
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navMenu}</ul>
                </div>
                <div className="navbar-end sm:pr-6 pr-2">
                    {user ? (
                        <div className="dropdown dropdown-end rounded-md px-2 py-1 drop-shadow-md z-50">
                            <label
                                tabIndex={0}
                                className="cursor-pointer mr-4"
                            >
                                <img
                                    // style={{ border: "2px solid #1fb2a5", borderRadius: "50%" }}
                                    className="h-12 w-12 mask mask-circle object-cover shadow-lg"
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
                                <p className="text-sm">{user.email}</p>
                                <hr className="mb-3" />
                                <Link to="#">
                                    <button className="btn b rounded-sm text-white w-full btn-sm text-xs sm:text-sm">
                                        Profile
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
        </div>
    );
};

export default Navbar;
