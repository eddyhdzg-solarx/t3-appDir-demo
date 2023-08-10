import { t } from "../trpc";
import { charactersRouter } from "./charactersRouter";
import { todosRouter } from "./todosRouter";

export const appRouter = t.router({
  characters: charactersRouter,
  todos: todosRouter,
});

export type AppRouter = typeof appRouter;
