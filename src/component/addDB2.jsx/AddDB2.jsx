import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-hot-toast";

const AddDB2 = () => {
    const { user } = useContext(AuthContext);

    const handlePost2 = (event) => {
        event.preventDefault();

        const form = event.target;

        const img = form.img.value;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const seller = form.seller.value;
        const Manufacturer = form.Manufacturer.value;
        const category_id = form.category.value;
        const ratings = parseFloat(form.ratings.value);

        const figure = {
            img: img,
            name: name,
            price: price,
            quantity: quantity,
            seller: seller,
            description: description,
            Manufacturer: Manufacturer,
            category_id: category_id,
            ratings: ratings,
        };

        fetch("https://server-anime-fig.vercel.app/figures", {
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
                form.reset();
            });
    };

    return (
        <div className="bg-gray-800">
            <form
                onSubmit={handlePost2}
                className="px-1 my-20"
            >
                <div className="relative card-body mx-0 px-2 sm:px-6 bg-base-300 rounded-md md:px-24">
                    <p className="text-2xl text-error font-bold text-left">
                        Add New Figure To Second Database
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 md:gap-4 pt-10">
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
                        <div className="form-control">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="product name"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
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
                                type="text"
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
                            <option
                                className="text-xs"
                                title="fate/grand order"
                            >
                                1
                            </option>
                            <option
                                className="text-xs"
                                title="saekano"
                            >
                                2
                            </option>
                            <option
                                className="text-xs"
                                title="gundam"
                            >
                                3
                            </option>
                            <option
                                className="text-xs"
                                title="re:zero"
                            >
                                4
                            </option>
                            <option
                                className="text-xs"
                                title="arknight"
                            >
                                5
                            </option>
                        </select>
                    </div>
                    <div className="pb-10 pt-4">
                        <textarea
                            name="description"
                            required
                            className="text-slate-200 textarea textarea-error rounded-sm bg-gray-600 w-full min-h-[10rem]"
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

export default AddDB2;
