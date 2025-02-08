-- Inserting sample tags into blogs_tags
INSERT INTO blogs_schema.blogs_tags (name)
VALUES
  ('Frontend'),
  ('Backend'),
  ('Bug Bounty'),
  ('Networking'),
  ('Business'),
  ('Music');


-- Inserting a sample blog post into blogs_posts
INSERT INTO blogs_schema.blogs_posts (title, markdown, description, tag_id)
VALUES
  ('My First Blog Post', 'This is the content of the first blog post written in Markdown.', 'This is a short description of the first blog post.', 1),
  ('My Second Blog Post', 'This is the content of the Second blog post written in Markdown.', 'This is a short description of the Second blog post.', 2),
  ('My Third Blog Post', 'This is the content of the Third blog post written in Markdown.', 'This is a short description of the Third blog post.', 3),
  ('My Fourth Blog Post', 'This is the content of the Fourth blog post written in Markdown.', 'This is a short description of the Fourth blog post.', 4),
  ('My Fifth Blog Post', 'This is the content of the Fifth blog post written in Markdown.', 'This is a short description of the Fifth blog post.', 5),
  ('My Six Blog Post', 'This is the content of the Six blog post written in Markdown.', 'This is a short description of the Six blog post.', 6);


-- Query to select all posts (do not copy this)
select * from blogs_schema.blogs_posts