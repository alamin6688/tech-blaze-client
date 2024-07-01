import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";
import Content from "../Pages/BlogDetails/Content";
import Author from "../Pages/BlogDetails/Author";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
          loader: () => fetch('https://dev.to/api/articles'),
        },
        {
          path: "/blog/:id",
          element: <BlogDetails></BlogDetails>,
          loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
          children: [
            {
                index: true,
                element: <Content></Content>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: "author",
                element: <Author></Author>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
          ]
        },
        {
          path: "/bookmarks",
          element: <Bookmarks></Bookmarks>,
        },
      ]
    },
  ]);