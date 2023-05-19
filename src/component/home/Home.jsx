import { useLoaderData } from "react-router-dom";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Banner from "./Banner";
import image from "../../assets/images/a9ecb6f55a394e209e30c04e61abf159.jpg.webp";

const Home = () => {
    const figures = useLoaderData();

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
