import { z } from "zod";
import { initRouter } from "./router";
import { Hono } from "hono";
import { createHonoEndpoints } from "ts-rest-hono";
import { contract } from "../common/contract";

export function initApp(_env: typeof process.env) {
  const env = z
    .object({
      // TODO: define your env vars zod schema here
    })
    .parse(_env);
  const router = initRouter();

  const app = new Hono();
  createHonoEndpoints(contract, router, app, { logInitialization: false, jsonQuery: true, responseValidation: true });
  return app;
}
