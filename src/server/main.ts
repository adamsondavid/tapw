import { z } from "zod";
import { initRouter } from "./router";
import { Hono } from "hono";
import { createHonoEndpoints } from "ts-rest-hono";
import { contract } from "../common/contract";

// @ts-ignore
const env = z.object({}).parse(Netlify.env.toObject());
const router = initRouter();

export const app = new Hono();
createHonoEndpoints(contract, router, app, { logInitialization: false, jsonQuery: true, responseValidation: true });
