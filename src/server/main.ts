import { z } from "zod";
import { contract } from "../common/contract";
import { initRouter } from "./router";
import { fetchRequestHandler } from "@ts-rest/serverless/fetch";
import { Elysia } from "elysia";

const env = z.object({}).parse(process.env);
const router = initRouter();

export const handler = new Elysia().mount((request) =>
  fetchRequestHandler({ request, contract, router, options: { responseValidation: true, jsonQuery: true } }),
).fetch;
