import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import image from "../../assets/background.jpg";
import Gallerie from "./gallary/Gallerie";
import Products from "../prouducts/Products";
import { useEffect, useState } from "react";
import ShowFig from "../showFig/ShowFig";
import Categoriies from "../category/Categoriies";
import useTitle from "../title/useWebTitle";

const Home = () => {
    const figures = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const [showFig, setFig] = useState([]);
    const repeatedFigures = [...figures, ...figures];
    useTitle("Home");

    const galleryImages = [
        {
            img: "https://i.ibb.co/q5fRDTP/e932f62b6a074f3087cd5eb21dce3da3.webp",
        },
        {
            img: "https://i.ibb.co/g69gWJB/33d476744d664700933bf21f960c06d6-jpg.webp",
        },
        {
            img: "https://i.ibb.co/wLBbYQV/0d725570e48d46d7ba31d562a8cf707a.webp",
        },
        {
            img: "https://i.ibb.co/bLNGcsx/7241939963544d0f913c755e5c91f406.webp",
        },
        {
            img: "https://i.ibb.co/njc7Gdy/e80c39d15f3a4cc2994f35f507e81cc0.webp",
        },
        {
            img: "https://i.ibb.co/7gk36F9/c8af6398b1644a789159126c53ffce23.webp",
        },
        {
            img: "https://i.ibb.co/xSGSnTZ/feb550526ee0443a8fa69ca233bba919.webp",
        },
        {
            img: "https://i.ibb.co/T1sfbT6/a3a8ac92e62d4eb98cf272afee14c8ed.webp",
        },
        {
            img: "https://i.ibb.co/J3v4T3F/0eb3cd68-93fa-4379-beaf-cac8e62069a4.jpg",
        },
        {
            img: "https://i.ibb.co/tJz3ygL/944120c5-ef05-4bca-9f3e-e67a037fac27.jpg",
        },
        {
            img: "https://i.ibb.co/0cyhpKc/35d47fe6-2bea-45cb-a671-e562cda6dd56.jpg",
        },
        {
            img: "https://i.ibb.co/ypnSxYv/a9ecb6f55a394e209e30c04e61abf159-jpg.webp",
        },
        {
            img: "https://i.ibb.co/n1KhV14/fca4dfa07e374bd68bbfcc146ed62de5-jpg.webp",
        },
        {
            img: "https://i.ibb.co/gznD0dp/79a78cd00fb64d33986a609f9830b277-jpg.webp",
        },
        {
            img: "https://i.ibb.co/yFVWx3K/89df1acb0d8b4c50a57a4c09901c840f-jpg.webp",
        },
    ];

    useEffect(() => {
        fetch("https://server-anime-fig-mk-saadi.vercel.app/addedFigure")
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
            <header className="relative mx-3 sm:mx-20 mt-14 h-screen">
                <img
                    src={image}
                    alt=""
                    className="w-full h-5/6 sm:h-screen object-cover rounded-md shadow-lg"
                />
                <div className="flex justify-center gap-2 absolute bottom-0  w-full rounded-lg bg-gradient-to-t from-[#000] to-[rgba(21,21,21,0)] shadow-lg">
                    {figures
                        .slice(20, 24)
                        .reverse()
                        .map((fig) => (
                            <Banner
                                key={fig._id}
                                fig={fig}
                            ></Banner>
                        ))}
                </div>
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
                <div className="grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-16 ">
                    <div>
                        <h2 className="text-info text-4xl text-center mb-10">
                            Discover the Magic <br /> of Anime Figures
                        </h2>
                        <p className="text-gray-500">
                            The world of anime figures is a captivating realm that combines art,
                            storytelling, and craftsmanship. It serves as a gateway for fans to
                            express their adoration for beloved characters and immerse themselves in
                            the enchanting worlds they inhabit. At our website, we bring this
                            extraordinary world directly to collectors and enthusiasts, offering an
                            extensive range of figures that capture the essence and allure of anime.
                        </p>
                        <p className="text-gray-500 mt-4 mb-8">
                            Our website boasts an extensive and carefully curated collection of
                            anime figures, ensuring that there is something for every fan. From
                            iconic characters to the latest releases, we strive to cater to diverse
                            tastes and preferences. Whether you are a fan of action-packed shonen
                            series, heartwarming slice-of-life anime, or mesmerizing fantasy
                            adventures, you'll discover figures that resonate with your interests.
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <Gallerie galleryImages={galleryImages} />
                    </div>
                </div>

                {/* shop section */}
                <h3 className="-mb-12 mt-20 text-xl md:text-2xl ml-4 sm:ml-20 font-bold text-info border-l-2 border-sky-400 pl-4">
                    Best Selling Merch
                </h3>
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mx-4 sm:mx-20 mt-16"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="200"
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
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mx-4 sm:mx-20"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="200"
                >
                    {showFig.slice(0, 6).map((fi) => (
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
