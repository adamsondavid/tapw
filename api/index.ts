import { initApi } from "../src/server/main";

export const config = { runtime: "nodejs" };
export default initApi(process.env);
