import { initApi } from "./server/main";

export const config = { path: "/api/*" };
// @ts-ignore
export default initApi(Netlify.env.toObject());
