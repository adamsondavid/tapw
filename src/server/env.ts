import { z } from "zod";

export type Env = z.infer<typeof EnvSchema>;

export const EnvSchema = z.object({
  GREETING: z.string().default("Hello"),
});
