import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import MyToysD from "./MyToysD";
import Swal from "sweetalert2";
import useTitle from "../hook/useWebTitle";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [figs, setFig] = useState([]);
    useTitle("myFigures");

    const url = `https://server-anime-fig.vercel.app/addedFigure?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setFig(data));
    }, [url]);

    const handleDeleteOP = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this figure?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't Delete`,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-anime-fig.vercel.app/addedFigure/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "", "success");
                            const updated = figs.filter((fig) => fig._id !== id);
                            setFig(updated);
                        }
                    });
            } else if (result.isDenied) {
                Swal.fire("Delete unsuccessful", "", "info");
            }
        });
    };

    return (
        <div
            style={{ width: "98vw" }}
            className="my-16 overflow-x-auto min-h-screen mx-auto"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="300"
        >
            <table className="table table-zebra w-full  max-w-[1366px]">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Seller</th>
                        <th>Figure Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Details</th>
                        <th>Modify</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {figs
                        .map((fig) => (
                            <MyToysD
                                key={fig._id}
                                fig={fig}
                                handleDeleteOP={handleDeleteOP}
                            ></MyToysD>
                        ))
                        .reverse()}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;
