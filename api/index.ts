import express from "express";
import { createExpressEndpoints } from "@ts-rest/express";
import { contract } from "../abc/common/contract";
import { router } from "../abc/backend/router";

const app = express()
  .use(express.urlencoded({ extended: false }))
  .use(express.json());
createExpressEndpoints(contract, router, app);
export default app;
