import { createFileRoute } from "@tanstack/react-router";
import InfiniteMessage from "../features/home/components/infinite-messages";
import { EduList } from "../features/home/components/education";
import Hero from "../features/home/components/hero";
import Contact from "../features/home/components/contact";
import { useEffect } from "react";
import supabase from "../shared/lib/supabase";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {


  async function getFetchBlog() {
    const { data } = await supabase.schema('blogs_schema').from("blogs_posts").select();

    console.log(data)
    console.log('hi')
  }

  useEffect(() => {
    getFetchBlog();
  }, []);


  return (
    <main className="container mx-auto max-w-2xl flex-1 px-6">
      <Hero />
      <InfiniteMessage />
      <EduList />
      <Contact />
    </main>
  );
}
