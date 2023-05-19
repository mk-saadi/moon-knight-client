import { Link } from "react-router-dom";

const AddToys = () => {
    const handlePost = (event) => {
        event.preventDefault();
    };

    return (
        <div className="hero min-h-screen mt-16">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-10">
                <h2 className="text-2xl font-bold text-error mb-10">Add New Figure To Database!</h2>
                <form
                    onSubmit={handlePost}
                    className="card-body grid grid-cols-2"
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sellers Name*</span>
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
                            <span className="label-text">Profile</span>
                        </label>
                        <input
                            name="profile"
                            type="file"
                            className="file-input file-input-bordered file-input-error w-full max-w-xs"
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

export default AddToys;
