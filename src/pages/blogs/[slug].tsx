import BlogId from "@/features/blogs/components/blog-id";
import getBlogById from "@/features/blogs/database/getBlogById";
import Layout from "@/shared/components/layout";
import { BlogType } from "@/shared/types/type";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { slug } = context.params as { slug: string };
  const { data, error } = await getBlogById({ blogId: +slug });

  if (error) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
};

export default function Page({ data }: { data: BlogType }) {
  return (
    <Layout>
      <BlogId blog={data} />
    </Layout>
  );
}
