import { serve } from "@hono/node-server";
import { app } from "./server/main";

//const a = new Hono().get("/:name", (c) => c.text(c.req.param("name")));
serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
