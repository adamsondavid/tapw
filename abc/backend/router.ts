import { initServer } from "@ts-rest/express";
import { contract } from "../common/contract";

export const router = initServer().router(contract, {
  async greet({ params }) {
    return { status: 200, body: `Hello ${params.name}` };
  },
});
