"use client";

import { z } from "zod";
import { useZodForm } from "~/utils/useZodForm";

const createTodoFormSchema = z.object({
  todo: z.string().min(1),
});

export type CreateTodoFormSchema = z.infer<typeof createTodoFormSchema>;

export const createTodoFormDefaultValues: CreateTodoFormSchema = {
  todo: "",
};

export function useCreateTodoForm() {
  return useZodForm({
    schema: createTodoFormSchema,
    defaultValues: createTodoFormDefaultValues,
  });
}
