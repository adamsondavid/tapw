import { initApp } from "../src/server/main";

export default {
  fetch: (req: Request, env: typeof process.env) => initApp(env).fetch(req),
};
