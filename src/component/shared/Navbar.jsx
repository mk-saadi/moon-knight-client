import { Link } from "react-router-dom";
import img from "../../assets/img.png";

const Navbar = () => {
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
        <div className="navbar ">
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
                <Link to="/login">
                    <button className="btn btn-error text-white rounded-sm">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
