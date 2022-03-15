import { setupWorker } from "msw";
import { handlers } from "./handlers";
import { chartHandlers } from "./handlers/chartHandlers";

export const worker = setupWorker(...handlers, ...chartHandlers);
