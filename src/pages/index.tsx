import Contact from "@/features/home/components/contact";
import { EduList } from "@/features/home/components/education";
import Hero from "@/features/home/components/hero";
import InfiniteMessage from "@/features/home/components/infinite-messages";
import Layout from "@/shared/components/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <InfiniteMessage />
      <EduList />
      {/* <ExpList /> */}
      <Contact />
    </Layout>
  );
}
