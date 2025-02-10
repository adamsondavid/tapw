import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { initApi } from "./server/main";

const app = new Hono();

app.mount("/api", initApi(process.env));

app.use("/assets/*", async (c, next) => {
  await next();
  c.header("Cache-Control", "public, max-age=31556952, immutable");
});
app.use("*", serveStatic({ root: "./dist/static" }));
app.notFound(() => app.request("/"));

const server = serve({ fetch: app.fetch, port: Number(process.env.PORT) || 3000 }, ({ port }) => {
  console.log(`server started on http://localhost:${port}/`);
});
process.on("SIGINT", () => {
  server.close();
});
