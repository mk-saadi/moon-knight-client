import { toast } from "react-hot-toast";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditMyToys = () => {
    const figs = useLoaderData();
    const navigate = useNavigate();

    const {
        _id,
        img,
        email,
        name,
        price,
        quantity,
        seller,
        description,
        Manufacturer,
        category,
        rating,
    } = figs;

    const handlePatch = (event) => {
        event.preventDefault();

        const form = event.target;
        const img = form.img.value;
        const email = form.email.value;
        const name = form.name.value;
        const price = parseFloat(form.price.value);
        const quantity = parseFloat(form.quantity.value);
        const description = form.description.value;
        const seller = form.seller.value;
        const Manufacturer = form.Manufacturer.value;
        const category = form.category.value;
        const rating = parseFloat(form.ratings.value);

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
            rating: rating,
        };

        console.log(figure);

        fetch(`https://server-anime-fig-mk-saadi.vercel.app/addedFigure/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(figure),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Figure modified successfully");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error("An error occurred while modifying the figure");
            });
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="bg-gray-800">
            <form
                onSubmit={handlePatch}
                className="px-1 my-20"
            >
                <div className="relative card-body mx-0 px-2 sm:px-6 bg-base-300 rounded-md md:px-24">
                    <p className="text-2xl text-error font-bold text-left">
                        Update <span className="text-3xl">{name}?</span>
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 md:gap-4 pt-10">
                        {/* seller */}
                        <div className="form-control">
                            <input
                                type="text"
                                name="seller"
                                required
                                defaultValue={seller}
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
                                title="products name"
                                defaultValue={name}
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
                                defaultValue={email}
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
                                title="price *numerical"
                                defaultValue={price}
                                placeholder="product price ($)"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="Manufacturer"
                                required
                                title="figures's manufacturer"
                                defaultValue={Manufacturer}
                                placeholder="manufacturer"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="url"
                                name="img"
                                title="image url"
                                defaultValue={img}
                                required
                                placeholder="product image"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="ratings"
                                title="ratings *numerical"
                                required
                                defaultValue={rating}
                                placeholder="rating (number)"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="quantity"
                                title="quantity"
                                required
                                defaultValue={quantity}
                                placeholder="quantity"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <select
                            className="select select-info  rounded-sm bg-gray-600"
                            name="category"
                            defaultValue={category}
                        >
                            <option
                                disabled
                                selected
                            >
                                products sub-category
                            </option>
                            <option className="text-xs">Nendoroid</option>
                            <option className="text-xs">Figma</option>
                            <option className="text-xs">Scale Figures</option>
                            <option className="text-xs">Bishoujo Figures</option>
                        </select>
                        <p className="text-gray-600">*category: {category}</p>
                    </div>
                    <div className="pb-10 pt-4">
                        <textarea
                            name="description"
                            required
                            defaultValue={description}
                            className="text-slate-200 textarea textarea-info rounded-sm bg-gray-600 w-full min-h-[10rem]"
                            placeholder="Product Description"
                        ></textarea>
                    </div>
                    <div className="flex justify-between">
                        <button
                            className="btn btn-error rounded-sm text-white flex items-center gap-1"
                            onClick={handleGoBack}
                        >
                            <BsFillArrowLeftSquareFill />
                            Go Back
                        </button>
                        <input
                            type="submit"
                            className="btn btn-info rounded-sm text-white"
                            value="Submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditMyToys;
