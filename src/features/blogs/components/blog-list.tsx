import { BlogType } from "@/shared/types/type";
import Link from "next/link";

function BlogList({ blogs }: { blogs: BlogType[] }) {
  return (
    <section>
      <div>
        {blogs.map((blog: BlogType) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className="mb-3 min-h-[68px] flex justify-between gap-2 bg-slate-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:min-h-[76px] md:gap-3 cursor-pointer"
          >
            <div>
              <h3 className="text-base text-white md:text-lg mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-white md:text-base italic">
                {blog.description}
              </p>
            </div>

            <p className="text-xs text-slate-400 md:text-sm italic flex ">
              <span>#</span>
              {blog.blogs_tags.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
