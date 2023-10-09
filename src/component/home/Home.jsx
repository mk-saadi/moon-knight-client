import { Link, useLoaderData } from "react-router-dom";
import Products from "../prouducts/Products";
import { useEffect, useState } from "react";
import ShowFig from "../showFig/ShowFig";
import Categoriies from "../category/Categoriies";
import useTitle from "../hook/useWebTitle";

const Home = () => {
    const Jewelry = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const [showFig, setFig] = useState([]);
    const repeatedFigures = [...Jewelry, ...Jewelry];
    useTitle("Home");

    useEffect(() => {
        fetch("http://localhost:9000/addedJewelry")
            .then((res) => res.json())
            .then((data) => setFig(data));
    }, []);

    const handleShowMore = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };

    return (
        <>
            <header className="mt-14">
                <img
                    src="https://imonojewelryph.com/wp-content/uploads/2022/11/Imono-HomepageBanner-1a.jpg"
                    alt=""
                    className="w-full object-cover rounded-md shadow-lg"
                />
            </header>
            <main className="mt-20">
                {/* sub-category */}
                <div
                    className="mb-16"
                    style={{ minHeight: "510px" }}
                >
                    <Categoriies />
                </div>

                {/* gallery section */}

                {/* shop section */}
                <h3 className="-mb-12 mt-20 text-xl md:text-2xl ml-4 sm:ml-20 font-bold text-info border-l-2 border-sky-400 pl-4">
                    Best Selling Merch
                </h3>
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-4 sm:mx-20 mt-16 text-slate-400"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="300"
                >
                    {repeatedFigures.slice(0, showAll ? repeatedFigures.length : 12).map((figS) => (
                        <Products
                            key={figS._id}
                            figS={figS}
                        ></Products>
                    ))}
                </div>
                <div className="flex justify-end mr-4 md:mr-28 mt-4 mb-16">
                    {showAll ? (
                        <button
                            className="btn btn-xs md:btn-sm px-6 btn-accent text-white rounded-sm"
                            onClick={handleShowLess}
                        >
                            View Less
                        </button>
                    ) : (
                        <button
                            className="btn btn-xs md:btn-sm px-6 btn-accent text-white rounded-sm"
                            onClick={handleShowMore}
                        >
                            View More...
                        </button>
                    )}
                </div>

                {/* latest merch */}
                <h3 className="mt-20 text-xl md:text-2xl ml-4 mb-4 sm:ml-20 font-bold text-info border-l-2 border-sky-400 pl-4">
                    Discover Latest Merch
                </h3>
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-4 sm:mx-20 mt-4 text-slate-400"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="300"
                >
                    {showFig.slice(1, 7).map((fi) => (
                        <ShowFig
                            key={fi._id}
                            fi={fi}
                        ></ShowFig>
                    ))}
                </div>
                <div className="flex justify-end mr-4 md:mr-28 mt-4 mb-20">
                    <Link to="/allToys">
                        <button className="btn btn-sm px-6 btn-accent text-white rounded-sm">
                            Show All
                        </button>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default Home;
