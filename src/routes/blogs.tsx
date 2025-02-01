import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs")({
  component: Blogs,
});

function Blogs() {
  return (
    <main className="container mx-auto max-w-2xl flex-1 px-6">
      <p className="text-center text-2xl text-slate-400">Not Available</p>
    </main>
  );
}
