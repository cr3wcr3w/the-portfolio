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
  ('Building My Portfolio',
   E'# Building My Portfolio\n\nCreating a personal portfolio is an exciting way to showcase my skills. I used a modern stack that’s easy to manage and gave me full control. The tools I chose were **React**, **TanStack Router**, **Supabase**, **GSAP**, and **Tailwind CSS**. Here\'s why I picked these tools.\n\n## Why React?\n\nI chose **React** because it’s perfect for building dynamic UIs with its component-based architecture, making my portfolio modular and easy to maintain. Plus, React’s ecosystem ensures future scalability.\n\n## TanStack Router: A React Routing Solution\n\n**TanStack Router** is a lightweight routing library for React. It’s flexible, easy to set up, and provides seamless integration without the complexity of other frameworks.\n\n## Supabase: Storing My Blogs\n\nFor backend, **Supabase** was an ideal choice. It provides managed PostgreSQL databases, authentication, and storage. I use it to store blog posts and dynamically fetch data on my portfolio.\n\n## GSAP: Animating My Home Page\n\nTo make my portfolio feel dynamic, I used **GSAP** to animate components as they load. It’s a powerful animation library that creates smooth, high-performance animations.\n\n## Tailwind CSS: Fast, Utility-First Styling\n\n**Tailwind CSS** helped me quickly style my portfolio using utility classes, avoiding custom CSS. Its flexibility and speed allowed for rapid design changes while keeping the codebase clean.\n\n## Putting It All Together\n\nThe tools came together as follows:\n\n1. **React** provided the structure.\n2. **TanStack Router** handled routing.\n3. **Supabase** managed my blog backend.\n4. **GSAP** added interactive animations.\n5. **Tailwind CSS** made styling fast and easy.\n\nThis combination helped me build a functional, responsive, and maintainable portfolio.\n\n## Challenges and Lessons Learned\n\nSome challenges included fine-tuning **GSAP** animations and ensuring proper database structure with **Supabase**. However, the results were worth the effort.\n\n## Conclusion\n\nBuilding my portfolio was a rewarding experience. **React**, **TanStack Router**, **Supabase**, **GSAP**, and **Tailwind CSS** allowed me to create a portfolio that’s easy to maintain, responsive, and fun to interact with. If you\'re building your own, I highly recommend these tools.\n\nThanks for reading.',
   'In this post, I explain how I built my personal portfolio using React, TanStack Router, Supabase, GSAP, and Tailwind CSS. I share why I chose these tools and how they helped me create a dynamic and easy-to-maintain portfolio.',
   1);


-- Query to select all posts (do not copy this)
select * from blogs_schema.blogs_posts