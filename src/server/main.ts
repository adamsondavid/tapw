import { defineHandler } from "nitro/h3";
import { createApp } from "./app";
import { EnvSchema } from "@/server/env";

let app: ReturnType<typeof createApp>;

export default defineHandler((event) => {
  // access cloudflare bindings if needed, wrap them in you own abstraction and them inject them into createApp
  // const myBinding = event.context.cloudflare.MY_BINDING;
  // ...
  console.log("received eventt");
  app ??= createApp(EnvSchema.parse(process.env));
  return app.fetch(event.req);
});
