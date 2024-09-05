import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { initApi } from "./server/main";

const app = new Hono();
const handleApi = initApi(process.env);
const handleStatic = serveStatic({ root: "./dist/static" });
app.use("*", (c, next) => {
  return handleApi(c.req);
  return handleStatic(c, next);
});
app.use("/assets/*", async (c, next) => {
  await next();
  c.header("Cache-Control", "public, max-age=31556952, immutable");
});
app.use("/{api|ok}", serveStatic({ root: "./dist/static" }));
//app.mount("/", initApi(process.env));

const server = serve({ fetch: app.fetch, port: 3000 }, ({ port }) => {
  console.log(`server started on http://localhost:${port}/`);
});
process.on("SIGINT", () => {
  server.close();
});
