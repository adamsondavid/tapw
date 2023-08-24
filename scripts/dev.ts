import app from "../api";
import { contract } from "../src/common/contract";
import ViteExpress from "vite-express";
import { generateOpenApi } from "@ts-rest/open-api";
import * as swaggerUi from "swagger-ui-express";
import { name, version } from "../package.json";

app.use(
  "/api",
  swaggerUi.serve,
  swaggerUi.setup(
    generateOpenApi(
      contract,
      { info: { title: name, version } },
      { setOperationId: true },
    ),
  ),
);
ViteExpress.listen(app, 5173);
