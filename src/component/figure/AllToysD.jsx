/* eslint-disable react/prop-types */
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useTitle from "../hook/useWebTitle";

const AllToysD = ({ fig }) => {
    useTitle("figuresDetails");
    return (
        <tr className="text-xs sm:text-sm">
            <th>
                <img
                    src={fig.img}
                    alt=""
                    className="h-12 w-12 object-cover"
                />
            </th>
            <td>
                <p>{fig.name}</p>
            </td>
            <td>
                <p>{fig.category}</p>
            </td>
            <td>
                <p>{fig.quantity}</p>
            </td>
            <td>
                <p>$ {fig.price}</p>
            </td>
            <td>
                <Link to={`/figDetails/${fig._id}`}>
                    <button className="btn btn-xs sm:btn-sm btn-info rounded-sm text-white text-xs flex justify-center items-center gap-2 flex-nowrap no-animation">
                        Details <BsFillArrowRightSquareFill />
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToysD;
