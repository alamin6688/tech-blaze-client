import { useLoaderData } from "react-router-dom";


const Author = () => {
    const blogs = useLoaderData();


    return (
        <div>
            <h1>{blogs.user.name}</h1>
        </div>
    );
};

export default Author;