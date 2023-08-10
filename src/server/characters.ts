import "server-only";
import { appRouter } from "~/server";

export async function getCharacters() {
  const caller = appRouter.createCaller({});
  return await caller.characters.getCharacters();
}
