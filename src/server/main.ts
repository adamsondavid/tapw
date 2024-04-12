import { z } from "zod";
import { contract } from "../common/contract";
import { initRouter } from "./router";
import { fetchRequestHandler } from "@ts-rest/serverless/fetch";

const env = z.object({}).parse(process.env);
const router = initRouter();

export const handler = (request: Request) =>
  fetchRequestHandler({ request, contract, router, options: { responseValidation: true, jsonQuery: true } });
