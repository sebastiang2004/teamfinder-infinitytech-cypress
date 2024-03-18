import {z} from "zod";

export const departmentSchema = z.object({
  name: z
    .string()
    .min(3, "The email must have at least 3 characters"),
  description: z
    .string()
    .min(10, "The description must have at least 10 characters")
    .max(100, "The description must have at most 100 characters")
})
