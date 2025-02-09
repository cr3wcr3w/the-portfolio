import { marked } from "marked";
import { BlogType } from "@/shared/types/type";

function BlogId({ blog }: { blog: BlogType }) {
  // Convert Markdown to HTML using 'marked'
  const renderMarkdown = (markdown: string) => {
    return { __html: marked(markdown) }; // Convert Markdown to HTML
  };

  return (
    <section>
      <div className="flex justify-between items-baseline mb-3 md:mb-4 ">
        <h1 className="text-2xl text-white md:text-3xl">{blog.title}</h1>
        <p className="text-base text-slate-400 md:text-lg italic">
          #{blog.blogs_tags.name}
        </p>
      </div>
      <div className="mb-3 min-h-[600px] bg-slate-800 px-3 pt-8 pb-3">
        <div
          className="prose prose-sm lg:prose-base dark:prose-invert"
          dangerouslySetInnerHTML={renderMarkdown(blog.markdown)}
        />
      </div>
    </section>
  );
}

export default BlogId;
