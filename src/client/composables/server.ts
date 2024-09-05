import { initClient } from "@ts-rest/core";
import { contract } from "../../common/contract";

const server = initClient(contract, {
  baseUrl: "/api",
  baseHeaders: {},
  throwOnUnknownStatus: true,
  jsonQuery: true,
  validateResponse: true,
});
export const useServer = () => server;
