"use server";
import Image from "next/image";
import { getCharacters } from "~/server";

export async function ServerCharacters() {
  const characters = await getCharacters();

  return (
    <>
      <h1 className="mb-4 text-xl font-bold">Server Users</h1>
      <div className="mb-10 grid grid-cols-12 gap-4">
        {characters?.map((character) => (
          <div
            key={character.id}
            className="col-span-2 flex flex-col items-center border border-zinc-500/30"
          >
            <Image
              src={character.image}
              alt={character.name}
              width={100}
              height={100}
              className="mb-2"
            />
            <h3 className="text-sm font-semibold">{character.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
