import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import { useLoaderData, useNavigate } from "react-router-dom";

const CategoryD = ({ match }) => {
    // const figS = useLoaderData();
    const [figS, setFigure] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFigure = async () => {
            const response = await fetch(
                `https://server-anime-fig.vercel.app/addedFigure/${match.params.id}`
            );
            const data = await response.json();
            setFigure(data);
        };

        fetchFigure();
    }, []);

    if (!figS) {
        return <div>Loading...</div>;
    }

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className="mx-2 my-16">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="mx-4">
                    <img
                        src={figS.img}
                        alt=""
                        className="h-[350px] sm:h-[500px] sm:w-auto object-cover rounded-lg mx-auto"
                    />
                    <p className="text-xs italic text-center">{figS.name}</p>
                </div>
                <div className="sm:mr-10 md:mr-36">
                    <div>
                        <p className="text-xl sm:text-2xl text-slate-200 font-semibold mb-4">
                            {figS.name}
                        </p>
                        <p className="text-red-600 font-semibold">
                            US <span className="text-xl">${figS.price}</span>
                        </p>
                        <p>0.62% cash back</p>
                        <div className="my-3">
                            <Rating
                                style={{ maxWidth: 150 }}
                                value={Math.round(figS.rating)}
                            />
                        </div>
                    </div>
                    <div className="text-slate-300 mt-10">
                        <p>
                            <span className="font-semibold">Product Name:</span> {figS.name}
                        </p>
                        <p>
                            <span className="font-semibold">Manufacturer:</span> {figS.Manufacturer}
                        </p>
                        <p>
                            <span className="font-semibold">Seller:</span> {figS.seller}
                        </p>
                        <p className="my-3 text-gray-400">Order Limit: 3 per person</p>
                        <p
                            style={{ whiteSpace: "pre-line" }}
                            className="mt-10"
                        >
                            {figS.description}
                        </p>
                    </div>
                </div>
            </div> */}
            <div>
                <h2>{figS.name}</h2>
                <img
                    src={figS.img}
                    alt={figS.name}
                />
                <p>{figS.description}</p>
                {/* Render other figure details */}
            </div>
            <button
                onClick={handleGoBack}
                className="btn btn-error rounded-sm text-white mt-10 sm:mx-10 px-10 flex justify-center items-center gap-2"
            >
                <BsFillArrowLeftSquareFill className=" text-xl"></BsFillArrowLeftSquareFill> Go Back
            </button>
        </div>
    );
};

export default CategoryD;
