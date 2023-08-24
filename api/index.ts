import express from "express";
import { createExpressEndpoints } from "@ts-rest/express";
import { contract } from "../src/common/contract";
import { router } from "../src/backend/main";

const app = express()
  .use(express.urlencoded({ extended: false }))
  .use(express.json());
createExpressEndpoints(contract, router, app);
export default app;
