import { app } from "../src/server/main";

export default (req: Request, c: any) => {
  return app.fetch(req, { c });
};
