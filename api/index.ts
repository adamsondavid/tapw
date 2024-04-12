import { app } from "../src/server/main";

export const config = { runtime: "edge" };
export default (request: Request) => app.fetch(request);
