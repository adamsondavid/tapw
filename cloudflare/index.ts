import { initApp } from "../src/server/main";
import { handle } from "hono/cloudflare-pages";

export default handle(initApp(process.env));
