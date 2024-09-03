import { initApi } from "../src/server/main";

export const config = { runtime: "edge" };
export default initApi(process.env);
