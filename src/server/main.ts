import { Elysia } from "elysia";
import { createApp } from "./app";
import { EnvSchema } from "@/server/env";
import { CloudflareAdapter, isCloudflareWorker } from "elysia/adapter/cloudflare-worker";

const app = createApp(EnvSchema.parse(process.env));

let server;
if (isCloudflareWorker()) server = new Elysia({ prefix: "/server", adapter: CloudflareAdapter }).use(app).compile();
else server = new Elysia({ prefix: "/server" }).use(app);

export default server;
