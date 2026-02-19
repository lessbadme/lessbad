import { defineCollection, z } from "astro:content";

const gameEnum = z.enum(["tft", "deadlock", "wow"]);

const entries = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    game: gameEnum,
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    status: z.enum(["idea", "testing", "confirmed"]),
    patch: z.string().optional(),
    version: z.string().optional(),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
  }),
});

export const collections = { entries };
