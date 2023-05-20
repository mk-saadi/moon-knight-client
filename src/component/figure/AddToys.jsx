import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-hot-toast";

const AddToys = () => {
    const { user } = useContext(AuthContext);

    const handlePost = (event) => {
        event.preventDefault();

        const form = event.target;
        const img = form.img.value;
        const email = form.email.value;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const seller = form.seller.value;
        const Manufacturer = form.Manufacturer.value;
        const category = form.category.value;

        const figure = {
            img: img,
            email: email,
            name: name,
            price: price,
            quantity: quantity,
            seller: seller,
            description: description,
            Manufacturer: Manufacturer,
            category: category,
        };

        fetch("https://server-anime-fig-mk-saadi.vercel.app/addedFigure", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(figure),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Your new booking was successfully added.", {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            });
    };

    return (
        <div className="bg-gray-800">
            <form
                onSubmit={handlePost}
                className="px-1 my-20"
            >
                <div className="relative card-body mx-0 px-2 sm:px-6 bg-base-300 rounded-md md:px-24">
                    <p className="text-2xl text-error font-bold text-left">
                        Add New Figure To Database
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 md:gap-4 pt-10">
                        {/* seller */}
                        <div className="form-control">
                            <input
                                type="text"
                                name="seller"
                                required
                                defaultValue={user?.displayName}
                                placeholder="seller's name"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        {/* last name */}
                        <div className="form-control">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="product name"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        {/* phone */}
                        <div className="form-control">
                            <input
                                type="email"
                                name="email"
                                required
                                defaultValue={user?.email}
                                placeholder="seller's email"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <input
                                type="text"
                                name="price"
                                required
                                placeholder="product price ($)"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="Manufacturer"
                                required
                                placeholder="manufacturer"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="url"
                                name="img"
                                required
                                placeholder="product image"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="number"
                                name="ratings"
                                required
                                placeholder="rating (number)"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="quantity"
                                required
                                placeholder="quantity"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <select
                            className="select select-error  rounded-sm bg-gray-600"
                            name="category"
                        >
                            <option
                                disabled
                                selected
                            >
                                products sub-category
                            </option>
                            <option className="text-xs">fate/grand order</option>
                            <option className="text-xs">saekano</option>
                            <option className="text-xs">gundam</option>
                            <option className="text-xs">arknight</option>
                            <option className="text-xs">re:zero</option>
                        </select>
                    </div>
                    <div className="pb-10 pt-4">
                        <textarea
                            name="description"
                            required
                            className="text-slate-200 textarea textarea-error bg-gray-600 w-full min-h-[10rem]"
                            placeholder="Product Description"
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        className="absolute bottom-4 md:right-24 btn btn-info rounded-sm text-white"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddToys;
