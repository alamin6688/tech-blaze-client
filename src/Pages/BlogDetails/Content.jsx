import './BlogDetails';
import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blogs = useLoaderData();
  const { cover_image, title, published_at, body_html, tags, url } = blogs;

  return (
    <div className="max-w-screen-xl mx-auto border-2 p-4 group hover:no-underline focus:no-underline">
      <div
        rel="noopener noreferrer"
        className="group hover:no-underline focus:no-underline"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded bg-gray-500 dark:bg-gray-500"
          src={cover_image || placeHolderImage}
        />
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
          {tags.map((tag, idx) => (
            <a
              key={idx}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
            >
              #{tag}
            </a>
          ))}
        </div>
        <div className="pt-2 space-y-2 flex flex-col">
          <a href={url}
          target='_blank'
          className="text-2xl font-semibold hover:underline group-focus:underline">
            {title}
          </a>
          <span className="text-xs text-gray-400 dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <div className="prose dark:prose-dark max-w-none">
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
