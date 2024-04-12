import { z } from "zod";
import { initRouter } from "./router";
import { Hono } from "hono";
import { createHonoEndpoints } from "ts-rest-hono";
import { contract } from "../common/contract";

const env = z.object({}).parse(process.env);
const router = initRouter();

export const app = new Hono();
createHonoEndpoints(contract, router, app);
