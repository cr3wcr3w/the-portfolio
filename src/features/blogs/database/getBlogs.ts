import { supabase } from "@/shared/utils/supabase";

function getBlogs({ page, pageSize }: { page: number; pageSize: number }) {
  return supabase
    .schema("blogs_schema")
    .from("blogs_posts")
    .select(
      "id, inserted_at, title, markdown, description, updated_at, blogs_tags(id, name)",
    )
    .order("id", { ascending: true })
    .range((page - 1) * pageSize, page * pageSize - 1);
}

export default getBlogs;
