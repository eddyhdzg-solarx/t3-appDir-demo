import { t } from "../trpc";
import { charactersRouter } from "./charactersRouter";

export const appRouter = t.router({
  characters: charactersRouter,
});

export type AppRouter = typeof appRouter;
