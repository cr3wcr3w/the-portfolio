import BlogList from "@/features/blogs/components/blog-list";
import getBlogs from "@/features/blogs/database/getBlogs";
import Layout from "@/shared/components/layout";
import React from "react";
import { BlogType } from "@/shared/types/type";

export const getServerSideProps = async () => {
  const { data, error } = await getBlogs({ page: 1, pageSize: 5 });

  if (error) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
};

function Blogs({ data }: { data: BlogType[] }) {
  return (
    <Layout>
      <BlogList blogs={data} />
    </Layout>
  );
}

export default Blogs;
