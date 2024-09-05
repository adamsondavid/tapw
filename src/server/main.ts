import { z } from "zod";
import { initRouter } from "./router";
import { contract } from "../common/contract";
import { fetchRequestHandler } from "@ts-rest/serverless/fetch";

export function initApi(unvalidatedEnv: unknown) {
  const env = z
    .object({
      GREETING: z.string().optional(),
    })
    .parse(unvalidatedEnv);

  const router = initRouter(env.GREETING);

  return (request: Request) =>
    fetchRequestHandler({
      request,
      contract,
      router,
      options: { jsonQuery: true, responseValidation: true, basePath: "/api" },
    });
}
