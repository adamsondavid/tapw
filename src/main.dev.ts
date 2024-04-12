import { serve } from "@hono/node-server";
import { app } from "./server/main";

serve({ fetch: app.fetch, port: 3000 });
