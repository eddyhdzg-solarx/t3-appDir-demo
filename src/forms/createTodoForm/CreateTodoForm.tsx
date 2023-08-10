"use client";

import { Controller, FormProvider } from "react-hook-form";

import { useCreateTodoForm } from "./useCreateTodoForm";
import { cn } from "~/utils";
import { trpc } from "~/client";

export function CreateTodoForm() {
  const form = useCreateTodoForm();
  const {
    formState: { isValid },
  } = form;
  const disabled = !isValid;
  const mutation = trpc.todos.createTodo.useMutation();

  const onSubmit = form.handleSubmit(async (values, e) => {
    e?.preventDefault();
    window.alert("eddy");
    await mutation.mutateAsync(values);
    form.reset();
  });

  return (
    <FormProvider {...form}>
      <form
        noValidate
        autoComplete="off"
        onSubmit={() => void onSubmit()}
        className="flex items-end justify-between gap-x-4"
      >
        <div className="flex-1">
          <label
            htmlFor="todo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            New todo
          </label>
          <div className="mt-2">
            <Controller
              control={form.control}
              name="todo"
              render={({ field }) => (
                <input
                  type="text"
                  id="todo"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Learn Next.js"
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <button
          type="button"
          className={cn(
            "rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            {
              "opacity-50": disabled,
            }
          )}
          disabled={disabled}
        >
          Create Todo
        </button>
      </form>
    </FormProvider>
  );
}
