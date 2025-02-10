import { z } from "zod";
import { initRouter } from "./router";
import { contract } from "../common/contract";
import { createFetchHandler } from "@ts-rest/serverless/fetch";

const Env = z.object({
  GREETING: z.string().optional(),
});

export function initApi(unvalidatedEnv: unknown) {
  const env = Env.parse(unvalidatedEnv);

  const router = initRouter(env.GREETING);

  return createFetchHandler(contract, router, { jsonQuery: true, responseValidation: true });

  // return (request: Request) =>
  //   fetchRequestHandler({
  //     request,
  //     contract,
  //     router,
  //     options: { jsonQuery: true, responseValidation: true },
  //   });
}
