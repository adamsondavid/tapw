import { initApi } from "../src/server/main";

export default { fetch: initApi(process.env) };
