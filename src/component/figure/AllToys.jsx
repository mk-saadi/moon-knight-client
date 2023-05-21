import { useLoaderData } from "react-router-dom";
import AllToysD from "./AllToysD";
import { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";

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
            {/* search */}
            <div className="px-4 sm:px-10 py-2 bg-blue-400 flex flex-nowrap">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="input input-bordered input-accent w-full rounded-none rounded-l-sm"
                />
                <button className="btn btn-accent rounded-r-sm rounded-none">
                    <FaSearch />
                </button>
            </div>
            {/* sort */}

            <div
                style={{ width: "98vw" }}
                className="my-16 overflow-x-auto min-h-screen mx-auto"
            >
                <div className="mb-0 flex justify-end">
                    <button
                        onClick={handleSort}
                        className="btn btn-accent rounded-sm btn-sm flex gap-1 items-center"
                    >
                        Sort
                        <TbArrowsSort className="text-lg" /> {sortOrder === "asc" ? "" : ""}
                    </button>
                </div>
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
