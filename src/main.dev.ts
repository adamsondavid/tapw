import { Elysia } from "elysia";
import node from "@elysiajs/node";
import { handler } from "@/server/main";

new Elysia()
  .get("/", () => new Response("hello"))
  .mount("/", handler)
  .use(node(5173));
