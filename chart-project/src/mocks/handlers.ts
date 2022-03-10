import { rest } from "msw";
import { RESULT_DATA } from "../data/resultData";

export const handlers = [
  rest.get("/result", async (req, res, ctx) => {
    return res(
      ctx.json({
        RESULT_DATA,
      })
    );
  }),
];
