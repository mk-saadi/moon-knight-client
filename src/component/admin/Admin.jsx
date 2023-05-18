import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";

const Admin = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster
                toastOptions={{
                    className: "",
                    style: {
                        border: "1px solid #713200",
                        padding: "16px",
                        color: "#713200",
                        fontWeight: "bolder",
                    },
                }}
            />
        </div>
    );
};

export default Admin;
