# The archive

A personal portfolio and blog built with Astro. The site has an editorial-style
story archive at `/`, article pages under `/blog/`, and an About page at
`/about/`.

## Requirements

- Node.js `>=22.23.4`
- npm

## Run locally

From the project directory:

```sh
npm install
npm run dev
```

Open the local URL printed by Astro (by default, `http://localhost:4321`).

To make and preview a production build:

```sh
npm run build
npm run preview
```

The generated static site is written to `dist/`.

## Add a blog post

1. Create a Markdown file in `src/content/blog/`. Its filename becomes the post
   URL slug. For example, `rust-notes.md` is published at
   `/blog/rust-notes/`.
2. Add the required frontmatter at the very top of the file:

   ```md
   ---
   title: "A title for the post"
   description: "A short summary shown in the archive and search previews."
   pubDate: "11/06/2026"
   heroImage: ""
   ---
   ```

   Use `MM/DD/YYYY` for `pubDate`. Every post needs all four fields. Set
   `heroImage` to `""` when there is no image.
3. Write the article below the closing `---` using Markdown. Headings, links,
   lists, images, quotes, and fenced code blocks are supported.
4. To add a hero image, put it in `src/assets/` and use a path relative to the
   post file. For example, a file in `src/content/blog/` can use:

   ```md
   heroImage: "../../assets/my-hero-image.jpg"
   ```

Posts are sorted by publication date on the archive. Astro creates the article
route from the Markdown filename; no separate route or registration is needed.
Run `npm run build` to validate the content and generate the site.

## Project map

```text
src/
├── assets/           # Images and fonts
├── components/       # Shared Astro components
├── content/blog/     # Markdown and MDX posts
├── layouts/          # Shared page layouts, including article pages
├── pages/            # Routes: archive, About, and blog articles
└── styles/           # Global newspaper-inspired styles
```

## RSS

The feed is available at `/rss.xml`.
