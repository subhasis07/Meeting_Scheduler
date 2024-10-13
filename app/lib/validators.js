import { z } from 'zod';

const usernameSchema=z.object({
  username:z
              .string()
              .min(3)
              .max(18)
              .regex(
                /^[a-zA-Z0-9_]+$/,
                "userName can only contains letters, numbers & underscrores"
              )
})
export default usernameSchema;