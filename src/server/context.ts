import { type inferAsyncReturnType } from "@trpc/server";
import { prisma } from "./prisma";

export const createContextInner = () => {
  return {
    prisma,
  };
};

export const createContext = () => {
  return createContextInner();
};

export type Context = inferAsyncReturnType<typeof createContext>;
