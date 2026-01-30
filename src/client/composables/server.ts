import { hc } from "hono/client";
import type { AppType } from "@/server/app";

const client = hc<AppType>("/server");
export const useServer = () => client;
