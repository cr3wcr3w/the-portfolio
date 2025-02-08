import { useState, useEffect } from "react";
import supabase from "../../../shared/lib/supabase";

export type BlogsType = {
  id: number;
  inserted_at: string;
  title: string;
  markdown: string;
  description: string;
  blogs_tags: {
    id: number;
    name: string;
  };
};

export function useBlogs({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) {
  const [blogs, setBlogs] = useState<BlogsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function fetchBlogs() {
      setIsLoading(true);
      setIsError(false);

      const { data, error } = await supabase
        .schema("blogs_schema")
        .from("blogs_posts")
        .select(
          "id, inserted_at, title, markdown, description, blogs_tags(id, name)",
        )
        .order("id", { ascending: true })
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (error) {
        setIsError(true);
      }

      if (data) {
        setBlogs(data as unknown as BlogsType[]);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

    async function fetchTotalCount() {
      const { count, error } = await supabase
        .schema("blogs_schema")
        .from("blogs_posts")
        .select("id", { count: "exact" });

      if (error) {
        setIsError(true);
      }

      if (count) {
        setTotalCount(count);
      }
    }

    fetchBlogs();
    fetchTotalCount();
  }, [page, pageSize]);

  return { blogs, isLoading, isError, totalCount };
}
