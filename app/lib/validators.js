import { z } from 'zod';

export const usernameSchema=z.object({
  username:z
              .string()
              .min(3)
              .max(18)
              .regex(
                /^[a-zA-Z0-9_]+$/,
                "userName can only contains letters, numbers & underscrores"
              )
})

export const eventSchema=z.object({
  title: z
          .string()
          .min(1, "Title is Required")
          .max(50,"Title must be 50 chars or less"),
  description: z
                .string()
                .min(1, "Description is Required")
                .max(500,"Description must be 500 chars or less"),
  duration: z
              .number()
              .int()
              .positive("Duration must be a positive value"),
  isPrivate: z.boolean()
})