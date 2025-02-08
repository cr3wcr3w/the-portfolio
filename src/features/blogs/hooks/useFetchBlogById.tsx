import { useState, useEffect } from "react";
import supabase from "../../../shared/lib/supabase";

export type BlogType = {
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

export function useBlog({ blogId }: { blogId: number }) {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchBlog() {
      if (!blogId) return;

      setIsLoading(true);
      setIsError(false);

      const { data, error } = await supabase
        .schema("blogs_schema")
        .from("blogs_posts")
        .select(
          "id, inserted_at, title, markdown, description, blogs_tags(id, name)",
        )
        .eq("id", blogId)
        .single();

      if (error) {
        setIsError(true);
      }

      if (data) {
        setBlog(data as unknown as BlogType);
      }

      setIsLoading(false);
    }

    fetchBlog();
  }, [blogId]);

  return { blog, isLoading, isError };
}
