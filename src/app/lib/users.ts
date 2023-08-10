import "server-only";
import { appRouter } from "../api/trpc/trpc-router";

export async function getUsers() {
  const caller = appRouter.createCaller({});
  return await caller.getUsers();
}
