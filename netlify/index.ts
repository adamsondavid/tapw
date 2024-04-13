import { app } from "../src/server/main";

export default (req: Request, c: any) => {
  // @ts-ignore
  console.log(Netlify.env.toObject());
  // @ts-ignore
  process.env = Netlify.env.toObject();
  console.log(process.env);
  return app.fetch(req, { c });
};
