import { app } from "./server/main";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

app.use("*", serveStatic({ root: "./dist/static" }));
app.notFound(() => app.request("/"));
serve({ fetch: app.fetch, port: 3000 });
