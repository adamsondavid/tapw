import express from "express";
import { z } from "zod";
import { initServer, createExpressEndpoints } from "@ts-rest/express";
import { contract } from "../common/contract";
import { initRouter } from "./router";

const env = z.object({}).parse(process.env);
const router = initRouter();

export const app = express()
  .use(express.urlencoded({ extended: false }))
  .use(express.json());
createExpressEndpoints(contract, router, app, { responseValidation: true, jsonQuery: true });
