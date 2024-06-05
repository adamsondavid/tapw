import { initApp } from "./server/main";
import { serve } from "@hono/node-server";
import { name, version } from "../package.json";
import { generateOpenApi } from "@ts-rest/open-api";
import { contract } from "./common/contract";
import { swaggerUI } from "@hono/swagger-ui";

const app = initApp(process.env);
app.get("/api-spec", (c) =>
  c.json(generateOpenApi(contract, { info: { title: name, version } }, { setOperationId: true })),
);
app.get("/api", swaggerUI({ url: "/api-spec" }));
serve({ fetch: app.fetch, port: 5174 });
