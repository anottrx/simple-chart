import { rest } from "msw";
import { STATISTIC_DATA } from "../database/chart";

export const chartHandlers = [
  rest.get("/statistics", async (req, res, ctx) => {
    return res(
      ctx.json({
        STATISTIC_DATA,
      })
    );
  }),
];
