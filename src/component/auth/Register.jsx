import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import toast from "react-hot-toast";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import useTitle from "../hook/useWebTitle";

const auth = getAuth(app);

const Register = () => {
    const { newUser } = useContext(AuthContext);
    useTitle("register");

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast.error("password must be at least 6 characters long!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        form.reset();

        newUser(email, password)
            .then((res) => {
                const user = res.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL,
                });
                if (user.uid) {
                    toast.success("Account successfully created", {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
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

    return (
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <form
                    onSubmit={handleRegister}
                    className="card-body"
                >
                    <h2 className="text-5xl font-bold text-center text-error mb-10">Register!</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="your name"
                            className="input input-bordered bg-white text-gray-600"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="url"
                            name="image"
                            required
                            placeholder="your photo url"
                            className="input input-bordered bg-white text-gray-600"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="your email"
                            className="input input-bordered bg-white text-gray-600"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="your password"
                            className="input input-bordered bg-white text-gray-600"
                        />
                        <label className="label">
                            <p
                                href="#"
                                className="text-sm"
                            >
                                Accept our{" "}
                                <span className="label-text-alt link link-hover text-sm">
                                    terms and conditions
                                </span>
                            </p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input
                            type="submit"
                            value="Register"
                            className="btn btn-info rounded-sm text-white"
                        />
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <p className=" flex gap-2">
                            Already Have An Account
                            <Link
                                className="flex justify-around link link-error"
                                to="/login"
                            >
                                Login Now
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
