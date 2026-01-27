import { contract } from "../common/contract";
import { createFetchHandler, tsr } from "@ts-rest/serverless/fetch";
import { type Env } from "./env";

export function createApp(env: Env) {
  const greeting = env.GREETING;

  const app = tsr.router(contract, {
    async greet({ query }) {
      return { status: 200, body: `${greeting ?? "Hello"} ${query.name}` };
    },
  });

  return {
    handler: createFetchHandler(contract, app, {
      jsonQuery: true,
      responseValidation: true,
      basePath: "/api",
      errorHandler: console.error,
    }),
    fetch(req: Request) {
      if (!new URL(req.url).pathname.startsWith("/api")) return new Response("Not Found", { status: 404 });
      return this.handler(new Request(new URL(req.url), req));
    },
  };
}
