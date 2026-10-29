/**
 * Content collections for projects (case studies) and articles.
 *
 * - Add a Markdown file to src/content/projects/ or src/content/articles/.
 * - Files starting with an underscore (e.g. _template.md) are ignored.
 * - The Markdown body is reserved for the future full case study / article page.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** Business type or industry — avoid naming a client without permission. */
    industry: z.string(),
    challenge: z.string(),
    approach: z.string(),
    /** Describe real, verifiable outcomes only. */
    outcomes: z.string(),
    /** Link to the full case study once that page exists. Omit to hide the link. */
    caseStudyUrl: z.string().optional(),
    /** Lower numbers appear first. */
    order: z.number().default(100),
    /** Demonstration entries are labelled and hidden when site.showPlaceholders is false. */
    placeholder: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, articles };
