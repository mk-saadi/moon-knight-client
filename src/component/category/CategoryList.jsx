import { useState, useEffect } from "react";

const CategoryList = ({ figures, onCategorySelect }) => {
    const categoryNames = Array.from(new Set(figures.map((fig) => fig.category)));
    const [selectedCategory, setSelectedCategory] = useState(categoryNames[0]);

    useEffect(() => {
        onCategorySelect(selectedCategory);
    }, [selectedCategory, onCategorySelect]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        if (!selectedCategory) {
            const initialCategory = categoryNames[0];
            setSelectedCategory(initialCategory);
        }
    }, [selectedCategory, categoryNames]);

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 md:gap-4 gap-2 md:mr-40 justify-left mt-16 mb-6 mx-4 md:ml-24 sm:mx-20">
            {categoryNames.map((category) => (
                <button
                    key={category}
                    className={`btn text-white btn-xs text-xs sm:text-sm btn-sm rounded-sm no-animation whitespace-nowrap ${
                        selectedCategory === category ? "btn-accent text-white z-50" : "btn-info"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
                // <button
                //     key={category}
                //     className={`btn text-white btn-xs text-xs sm:text-sm md:btn-md rounded-sm no-animation ${
                //         selectedCategory === category ? "btn-accent text-white" : "btn-info"
                //     }`}
                //     onClick={() => handleCategoryClick(category)}
                // >
                //     {category}
                // </button>
            ))}
        </div>
    );
};

export default CategoryList;
