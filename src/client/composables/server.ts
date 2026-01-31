import { treaty } from "@elysiajs/eden";
import type { App } from "@/server/app";

const client = treaty<App>(window.location.origin);
export const useServer = () => client.server;
