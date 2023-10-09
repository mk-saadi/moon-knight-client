import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";

const Admin = () => {
    return (
        <div className="bg-slate-200 max-w-[1366px] mx-auto">
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
                    success: {
                        duration: 3000,
                        theme: {
                            primary: "green",
                            secondary: "blue",
                        },
                    },
                }}
            />
        </div>
    );
};

export default Admin;
