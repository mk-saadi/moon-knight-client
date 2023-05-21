import { useLoaderData } from "react-router-dom";
import AllToysD from "./AllToysD";

const AllToys = () => {
    const figs = useLoaderData();

    return (
        <div
            style={{ width: "98vw" }}
            className="my-16 mx-auto min-h-screen"
        >
            <table className="table table-zebra w-full">
                <tbody>
                    {figs
                        .map((fig) => (
                            <AllToysD
                                key={fig._id}
                                fig={fig}
                            ></AllToysD>
                        ))
                        .reverse()}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
