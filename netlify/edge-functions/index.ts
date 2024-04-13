import { app } from "../../src/server/main";

export default (req: Request, c: any) => app.fetch(req, { c });
