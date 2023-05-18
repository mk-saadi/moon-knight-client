import { Link } from "react-router-dom";
import img from "../../assets/img.png";
import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-hot-toast";

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
                <Link to="/about">About</Link>
            </li>
        </>
    );
    return (
        <div className="navbar border border-b-[1px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
            <div className="navbar-end">
                {user?.email ? (
                    <div className="dropdown dropdown-end rounded-sm drop-shadow-md">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost rounded-btn"
                        >
                            <img
                                className="h-12 w-12 mask mask-circle"
                                src={user.photoURL}
                                alt="profile image"
                                onMouseEnter={() => setShowUserName(true)}
                                onMouseLeave={() => setShowUserName(false)}
                                title={showUserName ? user.displayName : ""}
                            />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content p-2 shadow bg-base-100 rounded-sm mt-4 flex flex-col gap-2"
                        >
                            <Link>
                                <button className="btn b rounded-sm text-white">Profile</button>
                            </Link>
                            <Link to="/myToys">
                                <button className="btn  rounded-sm text-white">My Toys</button>
                            </Link>
                            <Link to="/addAToys">
                                <button className="btn  rounded-sm text-white">Add Toy</button>
                            </Link>
                            <Link>
                                <button
                                    className="btn btn-error rounded-sm text-white"
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
    );
};

export default Navbar;
