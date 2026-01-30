import { hc } from "hono/client";
import type { AppType } from "../../server/app";

const client = hc<AppType>("/");
export const useServer = () => client;
