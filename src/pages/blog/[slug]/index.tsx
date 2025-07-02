import path from "path";
import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Layout from "@/shared/components/layout";
import MdxLayout from "@/features/blog/components/mdx-layout";

interface BlogProps {
  slug: string;
}

export default function BlogPage({ slug }: BlogProps) {
  // Dynamically import the MDX file as a React component
  const BlogComponent = dynamic(() => import(`../../../content/${slug}.md`), {
    ssr: false,
  });
  return (
    <Layout>
      <MdxLayout>
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
