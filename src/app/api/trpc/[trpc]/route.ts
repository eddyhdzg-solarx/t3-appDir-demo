import {
  type FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch";
import { appRouter } from "../trpc-router";

export const runtime = "edge";

const handler = (request: Request) => {
  console.log(`incoming request ${request.url}`);
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: function (
      _opts: FetchCreateContextFnOptions
    ): object | Promise<object> {
      return {};
    },
  });
};

export { handler as GET, handler as POST };
