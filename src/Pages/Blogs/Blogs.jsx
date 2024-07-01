import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = useLoaderData();
  const [visibleBlogs, setVisibleBlogs] = useState(9); 

  const handleLoadMore = () => {
    // Load 9 more blogs each time
    setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 9); 
  };

  return (
    <div>
      <section className="bg-base-200 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
        <div className="container max-w-screen-xl mx-auto p-6 space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900 dark:bg-gray-50"
          >
            <img
              src={blogs[0].cover_image}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blogs[0].title}
              </h3>
              <span className="text-xs text-gray-400 dark:text-gray-600">
                {new Date(blogs[0].published_at).toLocaleDateString()}
              </span>
              <p>{blogs[0].description}</p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, visibleBlogs).map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          {visibleBlogs < blogs.length && (
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-xl font-bold font-inter rounded-md hover:underline bg-gray-900 dark:bg-gray-50 text-gray-400 dark:text-gray-600"
                onClick={handleLoadMore}
              >
                Load more blogs...
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
