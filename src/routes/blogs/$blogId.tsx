import { createFileRoute } from "@tanstack/react-router";
import BlogId from "../../features/blogs/components/blog-id";

export const Route = createFileRoute("/blogs/$blogId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { blogId } = Route.useParams();
  return (
    <main className="container mx-auto max-w-2xl flex-1 px-6">
      <BlogId id={blogId} />
    </main>
  );
}
