import { supabase } from "@/shared/utils/supabase";

function getBlogById({ blogId }: { blogId: number }) {
  return supabase
    .schema("blogs_schema")
    .from("blogs_posts")
    .select(
      "id, inserted_at, title, markdown, description, blogs_tags(id, name)",
    )
    .eq("id", blogId)
    .single();
}

export default getBlogById;
