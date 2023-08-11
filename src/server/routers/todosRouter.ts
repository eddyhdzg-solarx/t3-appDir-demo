import { t } from "../trpc";
import { z } from "zod";

export const todosRouter = t.router({
  createTodo: t.procedure
    .input(
      z.object({
        todo: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { todo } = input;

      return ctx.prisma.todo.create({
        data: {
          text: todo,
        },
      });
    }),
  deleteTodo: t.procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;

      return ctx.prisma.todo.delete({
        where: {
          id,
        },
      });
    }),

  getTodo: t.procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;

      return ctx.prisma.todo.findUnique({
        where: {
          id,
        },
      });
    }),
  getTodos: t.procedure.query(async ({ ctx }) => {
    return ctx.prisma.todo.findMany();
  }),
});
