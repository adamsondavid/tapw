import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { type Env } from "./env";

export type AppType = ReturnType<typeof createApp>;

export function createApp(env: Env) {
  const greeting = env.GREETING ?? "Hello";

  return new Hono().get(
    "/greeting",
    zValidator(
      "query",
      z.object({
        name: z.string(),
      }),
    ),
    (c) => {
      const query = c.req.valid("query");
      return c.json({ message: `${greeting} ${query.name}` });
    },
  );
}
