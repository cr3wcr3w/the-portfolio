import { useState } from "react";
import { useBlogs } from "../hooks/useFetchBlogs";
import { BlogsType } from "../hooks/useFetchBlogs";
import { BlogLoading } from "./blog-loading";
import { Link } from "@tanstack/react-router";

function Blog() {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const { blogs, isLoading, isError, totalCount } = useBlogs({
    page,
    pageSize,
  });

  if (isError) {
    return (
      <p className="text-center text-2xl text-slate-400">
        Error loading blogs. Please try again later.
      </p>
    );
  }

  const prev = () => {
    if (page === 1) return;

    setPage(page - 1);
  };

  const next = () => {
    if (page === totalCount) return;

    setPage(page + 1);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <section>
      {isLoading && <BlogLoading />}

      {!isLoading && blogs.length > 0 && (
        <div>
          {blogs.map((blog: BlogsType) => (
            <Link
              key={blog.id}
              to="/blogs/$blogId"
              params={{
                blogId: String(blog.id),
              }}
              className="mb-3 min-h-[68px] flex justify-between gap-2 bg-slate-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:min-h-[76px] md:gap-3 cursor-pointer"
            >
              <div>
                <h3 className="text-base text-white md:text-lg">
                  {blog.title}
                </h3>
                <p className="text-sm text-white md:text-base italic">
                  {blog.description}
                </p>
              </div>

              <p className="text-xs text-slate-400 md:text-sm italic">
                # {blog.blogs_tags.name}
              </p>
            </Link>
          ))}
        </div>
      )}

      <div className="flex justify-between">
        <button
          onClick={prev}
          className="text-slate-400 transition duration-300 ease-out hover:text-cyan-600 hover:underline flex items-center cursor-pointer"
        >
          <svg
            className="inline rotate-180 overflow-visible"
            fill="currentColor"
            strokeWidth="0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
          >
            <path d="M869 487.8 491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
          </svg>
          Prev
        </button>
        <p className="text-slate-400">
          {page}/{totalPages}
        </p>
        <button
          onClick={next}
          className="text-slate-400 transition duration-300 ease-out hover:text-cyan-600 hover:underline flex items-center cursor-pointer"
        >
          Next
          <svg
            className="inline overflow-visible"
            fill="currentColor"
            strokeWidth="0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
          >
            <path d="M869 487.8 491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Blog;
