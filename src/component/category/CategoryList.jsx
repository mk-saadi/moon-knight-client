import { useState, useEffect } from "react";

const CategoryList = ({ figures, onCategorySelect }) => {
    const categoryNames = Array.from(new Set(figures.map((fig) => fig.category)));
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const storedCategory = localStorage.getItem("selectedCategory");
        if (storedCategory && categoryNames.includes(storedCategory)) {
            setSelectedCategory(storedCategory);
            onCategorySelect(storedCategory);
        } else {
            // Set the initial selected category
            const initialCategory = categoryNames[0];
            setSelectedCategory(initialCategory);
            onCategorySelect(initialCategory);
        }
    }, [categoryNames, onCategorySelect]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        localStorage.setItem("selectedCategory", category);
        onCategorySelect(category);
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 md:gap-4 gap-2 md:mr-40 justify-left mt-16 mb-6 mx-4 md:ml-24 sm:mx-20">
            {categoryNames.map((category) => (
                <button
                    key={category}
                    className={`btn text-white btn-xs text-xs md:text-base md:btn-md rounded-sm no-animation ${
                        selectedCategory === category ? "btn-accent text-white" : "btn-info"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryList;
