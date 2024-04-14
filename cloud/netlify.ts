import { initApp } from "../src/server/main";
// @ts-ignore
import { handle } from "hono/netlify";

export const config = { path: "/api/*" };
// @ts-ignore
export default handle(initApp(Netlify.env.toObject()));
