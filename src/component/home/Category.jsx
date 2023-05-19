import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {
    const { id } = useParams();

    const figures = useLoaderData();
    console.log(figures);

    return (
        <div>
            <p>category</p>
        </div>
    );
};

export default Category;
