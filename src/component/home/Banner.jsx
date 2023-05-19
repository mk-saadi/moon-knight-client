/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Banner = ({ fig }) => {
    return (
        <div className="shadow-lg relative mb-10 mx-2">
            <img
                className="h-44 w-36 sm:h-64 sm:w-52 object-cover rounded-[10px] shadow-xl drop-shadow-xl"
                src={fig.img}
                alt=""
            />
            <div className="absolute bottom-0 h-full w-full rounded-lg bg-gradient-to-t from-[#151515] to-[rgba(21,21,21,0)] shadow-lg">
                <Link to={`/figures/${fig._id}`}>
                    <button className="text-white text-[10px] sm:text-base absolute bottom-8 btn-xs w-full opacity-0 hover:opacity-100 transition-opacity duration-200 font-">
                        View Product
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
