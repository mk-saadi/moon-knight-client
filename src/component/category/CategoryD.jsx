import { Rating } from "@smastrom/react-rating";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CategoryD = ({ figS }) => {
    return (
        <div className="relative">
            <img
                src={figS.img}
                alt=""
                className="rounded-sm mb-3 h-[200px] w-auto object-cover"
            />
            {/* <p className="text-sm mb-28 text-left px-2">{figS.name}</p> */}
            <p className="text-sm mb-28 text-left px-2">
                {figS.name.split(" ").length > 6
                    ? `${figS.name.split(" ").slice(0, 6).join(" ")}...`
                    : figS.name}
            </p>

            <div className="absolute bottom-0 w-full">
                <Rating
                    style={{ maxWidth: 80 }}
                    value={Math.round(figS.rating)}
                    className="h-5"
                />
                <p className="my-2 text-error text-xl">${figS.price}</p>
                <Link to={`/figDetails/${figS._id}`}>
                    <button className="btn btn-sm px-6 btn-info rounded-sm text-white text-xs flex justify-center items-center gap-2 flex-nowrap">
                        Details <BsFillArrowRightSquareFill />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CategoryD;
