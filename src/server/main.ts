import { Elysia } from "elysia";
import { createApp } from "./app";
import { EnvSchema } from "@/server/env";
import { CloudflareAdapter } from "elysia/adapter/cloudflare-worker";

export default new Elysia({ prefix: "/server", adapter: CloudflareAdapter })
  .use(createApp(EnvSchema.parse({ GREETING: "yo" })))
  .compile();
