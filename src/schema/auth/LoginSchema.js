import {z} from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "The email must have at least one character")
    .email("This is not a valid email.")
  ,
  password: z
    .string()
    .min(3, "The password must have at least 3 characters")
})
