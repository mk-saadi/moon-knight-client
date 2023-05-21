import { useLoaderData } from "react-router-dom";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Banner from "./Banner";
import image from "../../assets/background.jpg";
import Gallerie from "./gallary/Gallerie";
import Products from "../prouducts/Products";
import { useState } from "react";

const Home = () => {
    const figures = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const repeatedFigures = [...figures, ...figures];

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

    const handleShowMore = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };

    return (
        <>
            <div className="relative mx-3 sm:mx-20 mt-14 h-screen">
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
            </div>
            <main className="mt-20">
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

                <h3 className="-mb-12 mt-16 text-2xl ml-4 sm:ml-20 font-bold text-info border-l-2 border-sky-400 pl-4">
                    Discover Our Latest Merch
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mx-4 sm:mx-20 mt-16">
                    {repeatedFigures
                        .reverse()
                        .slice(0, showAll ? repeatedFigures.length : 12)
                        .map((figS) => (
                            <Products
                                key={figS._id}
                                figS={figS}
                            ></Products>
                        ))}
                </div>
                <div className="flex justify-end mr-4 md:mr-28 mt-4 mb-16">
                    {showAll ? (
                        <button
                            className="btn btn-sm px-6 btn-error text-white rounded-sm"
                            onClick={handleShowLess}
                        >
                            View Less
                        </button>
                    ) : (
                        <button
                            className="btn btn-sm px-6 btn-info text-white rounded-sm"
                            onClick={handleShowMore}
                        >
                            View More...
                        </button>
                    )}
                </div>
            </main>
            {/* <Tabs>
                <TabList>
                    <Tab>
                        <Link to={`/category/${figures.category_id}`}>
                            <button>g</button>
                        </Link>
                    </Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>arknight</h2>
                </TabPanel>
            </Tabs> */}
        </>
    );
};

export default Home;
