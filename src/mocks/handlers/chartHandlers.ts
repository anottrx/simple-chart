import { rest } from "msw";
import { STATISTIC_DATA } from "../database/chart";

export const handlers = [
  rest.get("/result", async (req, res, ctx) => {
    return res(
      ctx.json({
        STATISTIC_DATA,
      })
    );
  }),
];
