import express from "express";
import { initServer, createExpressEndpoints } from "@ts-rest/express";
import { contract } from "../common/contract";

const router = initServer().router(contract, {
  async greet({ params }) {
    return { status: 200, body: `Hello ${params.name}` };
  },
});

const app = express()
  .use(express.urlencoded({ extended: false }))
  .use(express.json());
createExpressEndpoints(contract, router, app);
export default app;
