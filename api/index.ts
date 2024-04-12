import { handler } from "../src/server/main";

export const config = { runtime: "edge" };
export default async (request: Request) => handler(request);
