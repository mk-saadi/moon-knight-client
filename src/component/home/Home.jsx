import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Home = () => {
    const figures = useLoaderData();
    console.log(figures);
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
        </div>
    );
};

export default Home;
