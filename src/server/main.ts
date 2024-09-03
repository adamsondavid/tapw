import { z } from "zod";
import { initRouter } from "./router";
import { contract } from "../common/contract";
import { fetchRequestHandler } from "@ts-rest/serverless/fetch";

export function initApi(unvalidatedEnv: unknown) {
  const env = z
    .object({
      greeting: z.string().optional(),
    })
    .parse(unvalidatedEnv);

  const router = initRouter(env.greeting);

  return (request: Request) =>
    fetchRequestHandler({
      request,
      contract,
      router,
      options: { jsonQuery: true, responseValidation: true },
    });
}
