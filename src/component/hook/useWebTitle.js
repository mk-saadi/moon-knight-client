import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Cosmos | ${title}`;
    }, [title]);
};

export default useTitle;
