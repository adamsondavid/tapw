import { app } from "../src/server/main";

export default (req: Request, c: any) => {
  // @ts-ignore
  process.env = Netlify.env.toObject();
  return app.fetch(req, { c });
};
