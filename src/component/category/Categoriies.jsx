import { useEffect, useState } from "react";
// import CategoryList from "./CategoryList";
// import Products from "../prouducts/Products";
import CategoryList from "./CategoryList";
import CategoryD from "./CategoryD";

const Categoriies = () => {
    const [figures, setFigures] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch("https://server-anime-fig.vercel.app/addedFigure")
            .then((res) => res.json())
            .then((data) => setFigures(data));
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const filteredFigures = selectedCategory
        ? figures.filter((fig) => fig.category === selectedCategory)
        : figures;

    return (
        <>
            <main className="mt-20">
                <h3 className="-mb-12 mt-20 text-2xl ml-4 sm:ml-20 font-bold text-info border-l-2 border-sky-400 pl-4">
                    Shop Merch By Sub-category
                </h3>

                <CategoryList
                    figures={figures}
                    onCategorySelect={handleCategorySelect}
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mx-4 sm:mx-20 mt-4">
                    {filteredFigures.map((figS) => (
                        <CategoryD
                            key={figS._id}
                            figS={figS}
                        ></CategoryD>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Categoriies;
