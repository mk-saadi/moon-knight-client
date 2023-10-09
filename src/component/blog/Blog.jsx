import useTitle from "../hook/useWebTitle";

const Blog = () => {
    useTitle("blog");
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="text-gray-700 font-bold text-4xl">
                <p>Due to shortage of time the website is looking a bit dull!!!</p>
            </div>
        </div>
    );
};

export default Blog;
