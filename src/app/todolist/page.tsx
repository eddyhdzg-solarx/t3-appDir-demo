import { CreateTodoForm } from "~/forms";

export default function Page() {
  return (
    <main className="container mx-auto max-w-xl px-2 md:px-3">
      <div className="w-full">
        <h1 className="mb-4 text-center text-xl font-bold">Todolist</h1>
        <div className="w-full">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  );
}
