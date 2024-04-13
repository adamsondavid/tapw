import { app } from "../src/server/main";

export default (request: Request) => app.fetch(request);
