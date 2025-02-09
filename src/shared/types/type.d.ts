export type BlogType = {
  description: string;
  id: number;
  inserted_at: string;
  markdown: string;
  title: string;
  updated_at: string;
  blogs_tags: {
    id: number;
    name: string;
  };
};
