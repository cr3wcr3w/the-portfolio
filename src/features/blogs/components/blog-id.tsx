import { useBlog } from "../hooks/useFetchBlogById";
import { BlogIdLoading } from "./blog-id-loading";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import NotFound from "../../../shared/components/not-found/not-found";

function BlogId({ id }: { id: string }) {
  const { blog, isError, isLoading } = useBlog({ blogId: +id });

  if (isError) {
    return (
      <section>
        <p className="text-center text-2xl text-slate-400">
          Error loading blogs. Please try again later.
        </p>
      </section>
    );
  }

  if (!isLoading && !blog) return <NotFound />;

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
          <div className="mb-3 min-h-[600px] flex flex-col gap-2 bg-gray-400 p-3 md:gap-3">
            <Markdown
              className="prose prose-sm prose-slate-800"
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {blog.markdown}
            </Markdown>
          </div>
        </>
      )}
    </section>
  );
}

export default BlogId;
