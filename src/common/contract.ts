import { initContract } from "@ts-rest/core";
import { z } from "zod";

export const contract = initContract().router(
  {
    greet: {
      method: "GET",
      path: "/greeting",
      query: z.object({
        name: z.string(),
      }),
      responses: {
        200: z.string(),
      },
    },
  },
  {
    strictStatusCodes: true,
    commonResponses: {
      400: z.object({ message: z.string() }),
      500: z.object({ message: z.string() }),
    },
  },
);
