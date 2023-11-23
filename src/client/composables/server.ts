import { initClient } from "@ts-rest/core";
import { contract } from "../../common/contract";

const server = initClient(contract, {
  baseUrl: "",
  baseHeaders: {},
  throwOnUnknownStatus: true,
  jsonQuery: true,
});
export const useServer = () => server;
