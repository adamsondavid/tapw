import { initApi } from "./server/main";

export const onRequest = (c: any) => initApi(c.env)(c.request);
