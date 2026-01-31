import { defineHandler } from "nitro/h3";
import { Elysia } from "elysia";
import { createApp } from "./app";
import { EnvSchema } from "@/server/env";

let app;

export default defineHandler((event) => {
  // access cloudflare bindings if needed, wrap them in you own abstraction and them inject them into createApp
  // const myBinding = event.context.cloudflare.MY_BINDING;
  // ...
  console.log("received event");
  app ??= new Elysia({ prefix: "/server" }).onError(console.error).use(createApp(EnvSchema.parse(process.env)));
  return app.fetch(event.req);
});
