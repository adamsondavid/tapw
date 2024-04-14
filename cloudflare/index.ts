import { initApp } from "../src/server/main";
import { handle } from "hono/cloudflare-pages";

export const onRequest = (c: any) => handle(initApp(c.env))(c);
