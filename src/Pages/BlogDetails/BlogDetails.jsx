import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const [tabindex, setTabindex] = useState(0);
  const blogDetails = useLoaderData();
  const {
    title,
    cover_image,
    comments_count,
    reading_time_minutes,
    public_reactions_count,
    published_at,
  } = blogDetails;

  return (
    <div className="max-w-screen-xl mx-auto px-2 mt-6 md:mt-12 mb-16 space-y-12">
      <article className="space-y-8 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
        <div className="space-y-6 px-4">
          <h1 className="text-4xl pt-8 font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400 dark:text-gray-600">
            <div className="flex items-center md:space-x-2">
              <img
                src={cover_image}
                alt=""
                className="w-6 h-6 mr-2 border rounded-full bg-gray-500 dark:bg-gray-500 border-gray-700 dark:border-gray-300"
              />
              <p className="text-sm">
                {reading_time_minutes} min read •{" "}
                {new Date(published_at).toLocaleDateString()}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} comments • {public_reactions_count} views
            </p>
          </div>
        </div>
        {/* Tab Start */}
        <div className="flex items-center mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            to=""
            onClick={() => setTabindex(0)}
            rel="noopener noreferrer"
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabindex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Content</span>
          </Link>
          <Link
            to={`author`}
            onClick={() => setTabindex(1)}
            rel="noopener noreferrer"
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
            ${tabindex === 1 ? "border border-b-0" : "border-b"} 
            rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Author</span>
          </Link>
        </div>
        {/* Tab End */}
        <Outlet></Outlet>
      </article>
    </div>
  );
};

export default BlogDetails;
