import path from "path";
import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Layout from "@/shared/components/layout";
import MdxLayout from "@/features/blog/components/mdx-layout";
import { useRouter } from "next/router";

interface BlogProps {
  slug: string;
}

export default function BlogPage({ slug }: BlogProps) {
  const router = useRouter();

  // Dynamically import the MDX file as a React component
  const BlogComponent = dynamic(() => import(`../../../content/${slug}.md`), {
    ssr: false,
  });

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push("/blog");
      });
    } else {
      router.push("/blog");
    }
  };
  return (
    <Layout>
      <MdxLayout>
        <button
          onClick={handleBack}
          className="cursor-pointer rounded-lg border border-slate-700 bg-slate-700 p-2 transition duration-300 ease-out hover:border hover:border-slate-400"
        >
          ⮜ back
        </button>
        <BlogComponent />
      </MdxLayout>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const contentDir = path.join(process.cwd(), "src", "content");
  const files = fs.readdirSync(contentDir);
  const paths = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      params: { slug: file.replace(/\.md$/, "") },
    }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  return { props: { slug } };
};
