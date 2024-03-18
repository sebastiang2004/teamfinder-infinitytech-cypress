import {z} from "zod";


export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "The name must have at least 3 characters"),
  organizationName: z
    .string()
    .min(3, "The organization name must have at least 3 characters"),
  address: z
    .string()
    .min(3, "The organization address must have at least 3 characters"),
  email: z
    .string()
    .min(1, "The email must have at least 1 character")
    .email(),
  password: z
    .string()
    .min(3, "The password must have at least 3 characters"),
  confirmPassword: z
    .string()
    .min(3, "The password must have at least 3 characters")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
