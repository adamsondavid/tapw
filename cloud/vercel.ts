import { initApp } from "../src/server/main";
import { handle } from "hono/vercel";

export const config = { runtime: "edge" };
export default handle(initApp(process.env));
