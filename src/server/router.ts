import { contract } from "../common/contract";
import { initServer } from "ts-rest-hono";

export function initRouter() {
  return initServer().router(contract, {
    async greet({ params }) {
      return { status: 200, body: `Hello ${params.name}` };
    },
  });
}
