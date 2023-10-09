import { useLoaderData } from "react-router-dom";
import AllToysD from "./AllToysD";
import useTitle from "../hook/useWebTitle";

const AllToys = () => {
    const figs = useLoaderData();

    useTitle("All Jewelry");

    return (
        <div
            style={{ width: "98vw" }}
            className="my-28 overflow-x-auto min-h-screen mx-auto"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="300"
        >
            <table className="table table-zebra w-full max-w-[1366px]">
                <thead className="text-gray-300">
                    <tr>
                        <th>Image</th>
                        <th>Jewelry Name</th>
                        <th>Sub-Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {figs.map((fig) => (
                        <AllToysD
                            key={fig._id}
                            fig={fig}
                        ></AllToysD>
                    ))}
                </tbody>
            </table>
            )
        </div>
    );
};

export default AllToys;
