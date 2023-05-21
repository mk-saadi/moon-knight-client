import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import MyToysD from "./MyToysD";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [figs, setFig] = useState([]);

    const url = `https://server-anime-fig.vercel.app/addedFigure?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setFig(data));
    }, [url]);

    return (
        <div
            style={{ width: "98vw" }}
            className="my-16 overflow-x-auto min-h-screen mx-auto"
        >
            <table className="table table-zebra w-full">
                <tbody>
                    {figs
                        .map((fig) => (
                            <MyToysD
                                key={fig._id}
                                fig={fig}
                            ></MyToysD>
                        ))
                        .reverse()}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;
