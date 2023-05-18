/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Banner = ({ fig }) => {
    return (
        <div className="shadow-lg relative">
            <img
                className="h-44 w-36 sm:h-64 sm:w-52 object-cover rounded-lg"
                src={fig.img}
                alt=""
            />
            <div className="absolute bottom-0 h-full w-full rounded-lg bg-gradient-to-t from-[#151515] to-[rgba(21,21,21,0)]">
                <Link>
                    <button className="text-[8px] sm:text-base absolute bottom-2 btn-xs">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
