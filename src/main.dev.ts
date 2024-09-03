import { initApi } from "./server/main";
import { serve } from "@hono/node-server";
import { name, version } from "../package.json";
import { generateOpenApi } from "@ts-rest/open-api";
import { contract } from "./common/contract";
import { swaggerUI } from "@hono/swagger-ui";
import { Hono } from "hono";

const app = new Hono();
app.get("/api", swaggerUI({ url: "/api-spec" }));
app.get("/api-spec", (c) =>
  c.json(generateOpenApi(contract, { info: { title: name, version } }, { setOperationId: true })),
);
app.mount("/", initApi(process.env));
serve({ fetch: app.fetch, port: 5174 });
