import "server-only";
import { appRouter } from "~/server";
import { prisma } from "./prisma";

export async function getCharacters() {
  const caller = appRouter.createCaller({ prisma });
  return await caller.characters.getCharacters();
}
