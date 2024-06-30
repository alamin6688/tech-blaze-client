import { Link } from "react-router-dom";
import placeHolderImage from '../../assets/404.jpg'

const BlogCard = ({blog}) => {

    const {cover_image, title, published_at, description, id} = blog;

  return (
    <div className="max-w-sm mx-auto transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-blue-900  group hover:no-underline focus:no-underline">
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
          src={cover_image || placeHolderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400 dark:text-gray-600">
          {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
