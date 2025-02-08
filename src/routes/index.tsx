import { createFileRoute } from "@tanstack/react-router";
import InfiniteMessage from "../features/home/components/infinite-messages";
import { EduList } from "../features/home/components/education";
import Hero from "../features/home/components/hero";
import Contact from "../features/home/components/contact";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="container mx-auto max-w-2xl flex-1 px-6">
      <Hero />
      <InfiniteMessage />
      <EduList />
      <Contact />
    </main>
  );
}
