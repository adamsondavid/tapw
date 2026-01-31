import { treaty } from "@elysiajs/eden";
import type { App } from "@/server/app";

const client = treaty<App>("/server");
export const useServer = () => client;
