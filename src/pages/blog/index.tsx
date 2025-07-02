import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "@/shared/components/layout";
import { useState } from "react";
import { useRouter } from "next/router";

type BlogMeta = {
  tags: string[];
  title: string;
  description: string;
  date: string;
  slug: string;
};

export default function Blog({ posts }: { posts: BlogMeta[] }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const filtered = search
    ? posts.filter((post) =>
        post.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase()),
        ),
      )
    : posts;

  const handleViewTransition = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(href);
      });
    } else {
      router.push(href);
    }
  };

  return (
    <Layout>
      <section className="mb-12">
        <h2 className="mb-4 text-xl text-slate-200 md:text-2xl">Blog Posts</h2>
        <input
          type="text"
          placeholder="Search by tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-6 w-full rounded bg-slate-900 p-2 text-slate-100"
        />
        {filtered.map((item, index) => (
          <div
            key={index}
            className="mb-3 flex min-h-[68px] justify-between gap-3 bg-slate-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:min-h-[76px] md:gap-4"
          >
            <div className="flex w-full gap-3">
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z" />
                    <path d="M9 9h6" />
                    <path d="M9 13h6" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-base text-white md:text-lg font-semibold">
                  <a
                    href={`/blog/${item.slug}`}
                    onClick={(e) =>
                      handleViewTransition(e, `/blog/${item.slug}`)
                    }
                    className="cursor-pointer"
                  >
                    {item.title.replace(/-/g, " ")}
                  </a>
                </div>

                <div className="mt-1 flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded bg-slate-700 px-2 py-0.5 text-sm text-slate-400 md:text-base italic"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-start pt-2">
              <a href={`/blog/${item.slug}`} aria-label={item.slug}>
                <svg
                  className="cursor-pointer text-xl hover:fill-cyan-600 overflow-visible text-white"
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), "src", "content");
  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(contentDir, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);
      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date ? String(data.date) : "",
        tags: Array.isArray(data.tags)
          ? data.tags
          : typeof data.tags === "string"
            ? data.tags.split(",").map((t) => t.trim())
            : [],
      };
    });
  return { props: { posts } };
}
