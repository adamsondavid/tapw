import { InjectionKey, createApp, inject } from "vue";
import { initClient } from "@ts-rest/core";
import { contract } from "../../common/contract";

const SERVER: InjectionKey<typeof server> = Symbol();
const server = initClient(contract, {
  baseUrl: "",
  baseHeaders: {},
  throwOnUnknownStatus: true,
});

export const initServer = () => {
  return {
    install(app: ReturnType<typeof createApp>) {
      app.provide(SERVER, server);
    },
  };
};

export function useServer(): typeof server {
  return inject(SERVER)!;
}
