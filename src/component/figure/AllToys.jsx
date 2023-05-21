import { useLoaderData } from "react-router-dom";
import AllToysD from "./AllToysD";
import { useState } from "react";

const AllToys = () => {
    const figs = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFigs = figs.filter((fig) =>
        fig.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="input input-bordered w-full"
                />
            </div>
            <div
                style={{ width: "98vw" }}
                className="my-16 overflow-x-auto min-h-screen mx-auto"
            >
                <table className="table table-zebra w-full">
                    <tbody>
                        {filteredFigs
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
        </>
    );
};

export default AllToys;
