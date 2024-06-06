import { initApp } from "./server/main";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

const app = initApp(process.env);
app.use("/assets/*", async (c, next) => {
  await next();
  c.header("Cache-Control", "public, max-age=31556952, immutable");
});
app.use("*", serveStatic({ root: "./dist/static" }));
app.notFound(() => app.request("/"));
const server = serve({ fetch: app.fetch, port: 3000 }, ({ port }) => {
  console.log(`server started on http://localhost:${port}/`);
});
process.on("SIGINT", () => {
  server.close();
});
