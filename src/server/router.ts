import { contract } from "../common/contract";
import { tsr } from "@ts-rest/serverless/fetch";

export function initRouter(greeting?: string) {
  return tsr.router(contract, {
    async greet({ query }) {
      console.log(`log ${query.name}`);
      console.warn(`warn ${query.name}`);
      console.error(`error ${query.name}`);
      return { status: 200, body: `${greeting ?? "Hello"} ${query.name}` };
    },
  });
}
