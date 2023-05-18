import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Banner from "./Banner";

const Home = () => {
    const figures = useLoaderData();

    return (
        <div>
            <h1 className="text-3xl font-bold underline">{figures.length}</h1>
            <Tabs>
                <TabList>
                    <Tab>Fate/Grand Order</Tab>
                    <Tab>Gundam</Tab>
                    <Tab>ArkNight</Tab>
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
            </Tabs>
            <div className="flex gap-2">
                {figures.slice(0, 5).map((fig) => (
                    <Banner
                        key={fig._id}
                        fig={fig}
                    ></Banner>
                ))}
            </div>
        </div>
    );
};

export default Home;
