import { initServer } from "@ts-rest/express";
import { contract } from "../common/contract";

export function initRouter() {
    return initServer().router(contract, {
        async greet({ params }) {
          return { status: 200, body: `Hello ${params.name}` };
        },
    });
}
