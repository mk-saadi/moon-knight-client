import { useLoaderData } from "react-router-dom";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Banner from "./Banner";
import image from "../../assets/images/a9ecb6f55a394e209e30c04e61abf159.jpg.webp";
import Gallerie from "./gallary/Gallerie";

const Home = () => {
    const figures = useLoaderData();

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

    return (
        <>
            <div className="relative mx-3 sm:mx-20 mt-14 h-screen">
                <img
                    src={image}
                    alt=""
                    className="w-full h-5/6 sm:h-screen object-cover rounded-md shadow-lg"
                />

                <div className="flex justify-center gap-2 absolute bottom-0  w-full rounded-lg bg-gradient-to-t from-[#000] to-[rgba(21,21,21,0)] shadow-lg">
                    {figures.slice(0, 4).map((fig) => (
                        <Banner
                            key={fig._id}
                            fig={fig}
                        ></Banner>
                    ))}
                </div>
            </div>
            <main className="mt-16">
                <Gallerie galleryImages={galleryImages} />
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
