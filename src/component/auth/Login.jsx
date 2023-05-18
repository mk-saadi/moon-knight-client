import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <h2 className="text-5xl font-bold text-center text-error mb-10">Login!</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
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
                            placeholder="password"
                            className="input input-bordered bg-white text-gray-600"
                        />
                        <label className="label">
                            <a
                                href="#"
                                className="label-text-alt link link-hover"
                            >
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input
                            type="submit"
                            value="Login"
                            className="btn btn-error rounded-sm text-white"
                        />
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <p className=" flex gap-2">
                            New To AnimeFig?
                            <Link
                                className="flex justify-around link link-error"
                                to="/register"
                            >
                                Register Now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
