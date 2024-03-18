import {z} from "zod";

export const skillSchema = z.object({
  category: z
    .string()
    .min(3, "The category must have at least 3 characters")
    .max(15, "The category must have at most 15 characters"),
  name: z
    .string()
    .min(3, "The name must have at least 3 characters")
    .max(15, "The name must have at most 15 characters"),
  description: z
    .string()
    .min(10, "The description must have at least 10 characters")
    .max(100, "The description must have at most 100 characters")
})
