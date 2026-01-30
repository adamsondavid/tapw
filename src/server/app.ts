import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { type Env } from "./env";

export function createApp(env: Env) {
  console.log("in createApp. is this a coldstart?");

  const greeting = env.GREETING;

  // Define routes by chaining them - required for proper RPC type inference
  const app = new Hono().basePath("/api").get(
    "/greeting",
    zValidator(
      "query",
      z.object({
        name: z.string(),
      }),
    ),
    (c) => {
      const { name } = c.req.valid("query");
      return c.json({ message: `${greeting ?? "Hello"} ${name}` });
    },
  );

  return app;
}

// Export the routes type for the RPC client
export type AppType = ReturnType<typeof createApp>;
