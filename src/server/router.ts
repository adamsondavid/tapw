import { contract } from "../common/contract";
import { RecursiveRouterObj } from "@ts-rest/serverless/src/lib/types";

type Router = RecursiveRouterObj<typeof contract, {}, unknown>;

export function initRouter() {
  return {
    async greet({ params }) {
      return { status: 200, body: `Hello ${params.name}` };
    },
  } satisfies Router;
}
