-- Drop schema if it exists
drop schema if exists blogs_schema cascade;

-- Create schema
create schema blogs_schema;

-- Create table
create table blogs_schema.blogs_tags (
  id bigint generated by default as identity primary key,
  name text not null unique
);

create table blogs_schema.blogs_posts (
  id bigint generated by default as identity primary key,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  markdown text not null,
  description text not null,
  tag_id bigint not null,
  constraint fk_tag foreign key (tag_id) references blogs_schema.blogs_tags(id) on delete cascade
);

-- Grant permissions
GRANT USAGE ON SCHEMA blogs_schema TO anon;
GRANT SELECT ON ALL TABLES IN SCHEMA blogs_schema TO anon;
GRANT USAGE ON SCHEMA blogs_schema TO authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA blogs_schema TO authenticated;

-- Enable Row Level Security (RLS)
alter table blogs_schema.blogs_posts enable row level security;
alter table blogs_schema.blogs_tags enable row level security;

-- RLS policies
CREATE POLICY "Enable read access for anon on blogs_tags" 
ON "blogs_schema"."blogs_tags"
AS PERMISSIVE
FOR SELECT
TO anon
USING (true);

CREATE POLICY "Enable read access for anon on blogs_posts" 
ON "blogs_schema"."blogs_posts"
AS PERMISSIVE
FOR SELECT
TO anon
USING (true);

CREATE POLICY "Enable all access for authenticated on blogs_tags" 
ON "blogs_schema"."blogs_tags"
AS PERMISSIVE
FOR ALL
TO authenticated
USING (
  (auth.jwt()->>'email') = 'racelisjk@gmail.com'
);

CREATE POLICY "Enable all access for authenticated on blogs_posts" 
ON "blogs_schema"."blogs_posts"
AS PERMISSIVE
FOR ALL
TO authenticated
USING (
  (auth.jwt()->>'email') = 'racelisjk@gmail.com'
);


-- instead of checking if the email is mine, just create an team table then chuchu
