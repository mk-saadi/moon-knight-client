import { useLoaderData } from "react-router-dom";
import AllToysD from "./AllToysD";

const AllToys = () => {
    const figs = useLoaderData();

    return (
        <div
            style={{ width: "95vw" }}
            className="my-16 mx-auto"
        >
            <table className="table table-zebra w-full">
                <tbody>
                    {figs.map((fig) => (
                        <AllToysD
                            key={fig._id}
                            fig={fig}
                        ></AllToysD>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
