import { initApi } from "./server/main";
import { name, version } from "../package.json";
import { generateOpenApi } from "@ts-rest/open-api";
import { contract } from "./common/contract";
import { swaggerUI } from "@hono/swagger-ui";
import { Hono } from "hono";

const app = new Hono();

app.mount("/api", initApi(process.env), {
  replaceRequest: (req) => new Request(new URL(req.url), req),
});

app.get("/openapi", swaggerUI({ url: "/openapi-spec" }));
app.get("/openapi-spec", (c) =>
  c.json(
    generateOpenApi(
      contract,
      {
        info: { title: name, version },
        servers: [{ url: "/api" }],
      },
      { setOperationId: true },
    ),
  ),
);

export default app;
