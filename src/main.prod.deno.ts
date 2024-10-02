import { initApi } from "./server/main";

// @ts-ignore
const app = initApi(Deno.env.toObject());
// @ts-ignore
Deno.serve((req) => app(req));
