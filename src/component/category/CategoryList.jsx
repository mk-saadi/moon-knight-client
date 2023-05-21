const CategoryList = ({ figures, onCategorySelect }) => {
    const categoryNames = Array.from(new Set(figures.map((fig) => fig.category)));

    return (
        <div className="flex justify-left mt-16 mb-6 ml-14 mx-4 sm:mx-20">
            {categoryNames.map((category) => (
                <button
                    key={category}
                    className="btn btn-info text-white btn-sm px-2 py-2 mx-1 rounded-sm"
                    onClick={() => onCategorySelect(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryList;
