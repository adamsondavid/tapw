import { Elysia } from "elysia";
import { z } from "zod";
import { type Env } from "./env";

export type App = ReturnType<typeof createApp>;

export function createApp(env: Env) {
  const greeting = env.GREETING ?? "Hello";

  return new Elysia().get(
    "/greeting",
    ({ query }) => {
      return { message: `${greeting} ${query.name}` };
    },
    {
      query: z.object({
        name: z.string(),
      }),
      response: z.object({
        message: z.string(),
      }),
    },
  );
}
