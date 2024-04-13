import { app } from "../src/server/main";

export const config = { path: "/api" };
export default (req: Request, c: any) => app.fetch(req, { c });
