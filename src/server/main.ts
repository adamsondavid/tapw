import { z } from "zod";
import { initRouter } from "./router";
import { Hono } from "hono";
import { createHonoEndpoints } from "ts-rest-hono";
import { contract } from "../common/contract";

export function initApp(unvalidatedEnv: unknown) {
  const env = z
    .object({
      // TODO: define your env vars zod schema here
    })
    .parse(unvalidatedEnv);

  // TODO: create and init services / SDKs here and inject env vars

  const router = initRouter(/* TODO: inject services / SDKs */);

  const app = new Hono();
  createHonoEndpoints(contract, router, app, { logInitialization: false, jsonQuery: true, responseValidation: true });
  return app;
}
