import { app } from "../src/server/main";
import { handle } from "hono/vercel";

export default handle(app);
