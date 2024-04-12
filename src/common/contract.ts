import { initContract } from "@ts-rest/core";
import { z } from "zod";

export const contract = initContract().router(
  {
    greet: {
      method: "GET",
      path: "/greeting/:name",
      pathParams: z.object({
        name: z.string(),
      }),
      responses: {
        200: z.string(),
      },
    },
  },
  { pathPrefix: "/api", strictStatusCodes: true },
);
