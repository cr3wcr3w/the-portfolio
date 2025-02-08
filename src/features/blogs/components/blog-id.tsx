import { useBlog } from "../hooks/useFetchBlogById";
import { BlogIdLoading } from "./blog-id-loading";

function BlogId({ id }: { id: string }) {
  const { blog, isError, isLoading } = useBlog({ blogId: +id });

  if (isError) {
    return (
      <p className="text-center text-2xl text-slate-400">
        Error loading blogs. Please try again later.
      </p>
    );
  }

  return (
    <section>
      {isLoading && <BlogIdLoading />}
      {!isLoading && blog && (
        <>
          <div className="flex justify-between items-center mb-2 md:mb-3">
            <h1 className="text-lg text-white md:text-xl">{blog.title}</h1>
            <p className="text-xs text-slate-400 md:text-sm italic">
              #{blog.blogs_tags.name}
            </p>
          </div>
          <div className="mb-3 min-h-[600px] flex flex-col gap-2 bg-slate-800 p-3 md:gap-3">
            <p>{blog.markdown}</p>
          </div>
        </>
      )}
    </section>
  );
}

export default BlogId;
