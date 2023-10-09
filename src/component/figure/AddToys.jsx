import { toast } from "react-hot-toast";
import useTitle from "../hook/useWebTitle";

const AddToys = () => {
    useTitle("add jewelry");

    const handlePost = (event) => {
        event.preventDefault();

        const form = event.target;

        const img = form.img.value;
        const name = form.name.value;
        const price = parseFloat(form.price.value);
        const quantity = parseFloat(form.quantity.value);
        const description = form.description.value;
        const category = form.category.value;
        const rating = parseFloat(form.ratings.value);

        const jewel = {
            img: img,
            name: name,
            price: price,
            quantity: quantity,
            description: description,
            category: category,
            rating: rating,
        };

        fetch("http://localhost:9000/addedJewelry", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(jewel),
        })
            .then((res) => res.json())
            .then((data) => {
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
        <div className="bg-slate-300">
            <form
                onSubmit={handlePost}
                className="px-1 my-20"
            >
                <div className="relative card-body mx-0 px-2 sm:px-6 rounded-md md:px-24">
                    <p className="text-2xl text-error font-bold text-left">
                        Add New Jewelry To Database
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 md:gap-4 pt-10">
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
                                type="url"
                                name="img" // array of img url
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
                            className="select select-info  rounded-sm bg-gray-600"
                            name="category"
                        >
                            <option
                                disabled
                                selected
                            >
                                products category
                            </option>
                            <option className="text-xs">Earrings</option>
                            <option className="text-xs">Bracelet</option>
                            <option className="text-xs">Ring</option>
                            <option className="text-xs">Chain</option>
                        </select>
                    </div>
                    <div className="pb-10 pt-4">
                        <textarea
                            name="description"
                            required
                            className="text-slate-200 textarea textarea-info rounded-sm bg-gray-600 w-full min-h-[10rem]"
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
