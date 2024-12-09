import { contract } from "../common/contract";
import { tsr } from "@ts-rest/serverless/fetch";

export function initRouter(greeting?: string) {
  return tsr.router(contract, {
    async greet({ query }) {
      console.assert(true, "hello");
      console.assert(false, "bye");
      console.debug("debug");
      console.info(`info ${query.name}`);
      console.log({ a: "b" });
      console.log({ a: "b", c: [{ d: ["a", [{ k: "e" }]] }] }, "hello", ["öö"]);
      console.log(JSON.stringify({ c: "d" }));
      console.warn(`warn ${query.name}`);
      console.error(`error ${query.name}`);
      return { status: 200, body: `${greeting ?? "Hello"} ${query.name}` };
    },
  });
}
