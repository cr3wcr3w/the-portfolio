-- Inserting sample tags into blogs_tags
INSERT INTO blogs_schema.blogs_tags (name)
VALUES
  ('Tech'),
  ('Lifestyle');

-- Inserting a sample blog post into blogs_posts
INSERT INTO blogs_schema.blogs_posts (title, markdown, description, tag_id)
VALUES
  ('My First Blog Post', 'This is the content of the first blog post written in Markdown.', 'This is a short description of the first blog post.', 1);


-- Query to select all posts (do not copy this)
select * from blogs_schema.blogs_posts