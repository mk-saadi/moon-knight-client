import { useLoaderData } from "react-router-dom";
import AllToysD from "./AllToysD";
import { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";

const AllToys = () => {
    const figs = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const filteredFigs = figs.filter((fig) =>
        fig.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    // const sortedFigs = filteredFigs.sort((a, b) => a.price - b.price);

    const handleSort = () => {
        const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newSortOrder);
    };

    const sortedFigs = filteredFigs.sort((a, b) => {
        const sortFactor = sortOrder === "asc" ? 1 : -1;
        return sortFactor * (a.price - b.price);
    });

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
            <div className="mb-4">
                <button
                    onClick={handleSort}
                    className="btn btn-accent rounded-sm"
                >
                    Sort
                    <TbArrowsSort /> {sortOrder === "asc" ? "" : ""}
                </button>
            </div>
            <div
                style={{ width: "98vw" }}
                className="my-16 overflow-x-auto min-h-screen mx-auto"
            >
                <table className="table table-zebra w-full">
                    <tbody>
                        {sortedFigs
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
