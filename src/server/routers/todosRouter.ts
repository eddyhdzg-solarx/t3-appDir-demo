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
});
