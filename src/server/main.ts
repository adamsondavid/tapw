import { Elysia } from "elysia";
import { createApp } from "./app";
import { EnvSchema } from "@/server/env";

export default new Elysia({ prefix: "/server" }).use(createApp(EnvSchema.parse(process.env))).compile();
