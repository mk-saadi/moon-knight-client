import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);
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
                            placeholder="your name"
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
                            className="btn btn-error rounded-sm text-white"
                        />
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <p className=" flex gap-2">
                            New To AnimeFig?
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
