import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    type: z.enum(["post", "micro"]).optional(),
    link: z.object({
      url: z.string(),
      title: z.string(),
    }).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    notes: z.array(z.object({
      title: z.string(),
      description: z.string().optional(),
      url: z.string(),
    })).optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/books" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    cover: image(),
    excerpt: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, projects, books };
