import { ClientCharacters, ServerCharacters } from "~/components";

export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-2 md:px-3">
      <ServerCharacters />
      <ClientCharacters />
    </main>
  );
}
