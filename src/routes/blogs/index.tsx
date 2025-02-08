import { createFileRoute } from "@tanstack/react-router";
import Blog from "../../features/blogs/components/blog";

export const Route = createFileRoute("/blogs/")({
  component: Blogs,
});

function Blogs() {
  return (
    <main className="container mx-auto max-w-2xl flex-1 px-6">
      <Blog />
    </main>
  );
}
