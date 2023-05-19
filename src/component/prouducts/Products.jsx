/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Products = ({ figS }) => {
    console.log(figS);
    return (
        <div className="relative">
            <img
                src={figS.img}
                alt=""
                className="rounded-sm mb-3 h-[200px] w-auto object-cover"
            />
            <p className="text-sm mb-12 text-left px-2">{figS.name}</p>

            {/* <p>{figS.price}</p> */}
            <Link
                to={`/figures/${figS._id}`}
                className="absolute bottom-0 w-full"
            >
                <button className="btn btn-sm px-6 btn-error rounded-sm text-white text-xs flex justify-center items-center gap-2">
                    Details <BsFillArrowRightSquareFill />
                </button>
            </Link>
        </div>
    );
};

export default Products;
