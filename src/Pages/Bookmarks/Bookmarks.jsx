import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../../Utilities";
import BlogCard from "../Blogs/BlogCard";

const Bookmarks = () => {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) =>{
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }

  
  return (
    <div className="max-w-screen-xl mx-auto min-h-[calc(100vh-284px)] grid px-4 pt-10 pb-16 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard 
        handleDelete={handleDelete}
        deletable={true}
        key={blog.id} 
        blog={blog}/>
      ))}
    </div>
  );
};

export default Bookmarks;
