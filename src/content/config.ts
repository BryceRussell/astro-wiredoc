import { z, defineCollection } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    description: z.string()
  }),
});