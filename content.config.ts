import { defineCollection, z } from '@nuxt/content'

const knowledgeSchema: any = z.object({
  createdAt: z.date()
})
const postSchema: any = z.object({
  conference: z.string(),
  visit: z.string(),
  speaker: z.string(),
  image: z.string(),
  publishedAt: z.date()
})
const presentationSchema: any = z.object({
  title: z.string(),
  conference: z.string(),
  visit: z.string(),
  speaker: z.string(),
  image: z.string(),
  publicationdate: z.date(),
  categories: z.array(z.string()),
  timeline: z.array(z.object({
    time: z.string(),
    link: z.string(),
    description: z.string(),
  })),
  quotes: z.array(z.object({
    text: z.string(),
    author: z.string(),
    time: z.string(),
    link: z.string(),
  })),
  references: z.array(z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    isbn: z.number().optional(),
    link: z.string().optional(),
    conference: z.string().optional(),
  }))
})

export const collections = {
  pages: defineCollection({
    type: 'page',
    source: {
      include: 'pages/**/*.md',
      prefix: ''
    }
  }),
  knowledge: defineCollection({
    type: 'page',
    source: '*/knowledge/**/*.md',
    schema: knowledgeSchema
  }),
  posts: defineCollection({
    type: 'page',
    source: '*/posts/**/*.md',
    schema: postSchema
  }),
  presentations: defineCollection({
    type: 'data',
    source: 'presentations/*.json',
    schema: presentationSchema
  })
}
