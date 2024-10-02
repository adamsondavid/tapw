import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { initApi } from "./server/main";

const app = new Hono();

// @ts-ignore
app.mount("/api", initApi(Deno.env.toObject()), {
  replaceRequest: (req) => new Request(new URL(req.url), req),
});

app.use("/assets/*", async (c, next) => {
  await next();
  c.header("Cache-Control", "public, max-age=31556952, immutable");
});
app.use("*", serveStatic({ root: "./static" }));
app.notFound(() => app.request("/"));

// @ts-ignore
Deno.serve(app.fetch);
