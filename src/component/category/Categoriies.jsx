import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import CategoryD from "./CategoryD";

const Categoriies = () => {
    const [figures, setFigures] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch("http://localhost:9000/addedJewelry")
            .then((res) => res.json())
            .then((data) => {
                setFigures(data);
                setSelectedCategory(data.length > 0 ? data[0].category : null);
            });
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const filteredFigures = selectedCategory
        ? figures.filter((fig) => fig.category === selectedCategory)
        : figures;

    console.log(filteredFigures);

    return (
        <>
            <div className="mt-20">
                <h3 className="-mb-12 mt-20 text-xl md:text-2xl ml-4 sm:ml-20 font-bold text-info border-l-2 border-sky-400 pl-4">
                    Shop Jewelry By category
                </h3>

                <CategoryList
                    figures={figures}
                    selectedCategory={selectedCategory}
                    onCategorySelect={handleCategorySelect}
                />

                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-4 sm:mx-20 mt-4 text-slate-400"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="300"
                >
                    {filteredFigures.map((figS) => (
                        <CategoryD
                            key={figS._id}
                            figS={figS}
                        ></CategoryD>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Categoriies;
