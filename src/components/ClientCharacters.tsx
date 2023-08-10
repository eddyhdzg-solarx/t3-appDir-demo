"use client";

import React from "react";
import Image from "next/image";
import { trpc } from "~/client";

export function ClientCharacters() {
  const {
    data: characters,
    isLoading,
    isFetching,
  } = trpc.characters.getCharacters.useQuery();

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className="mb-4 text-xl font-bold">Client Users</h1>
      <div className="grid grid-cols-12 gap-4">
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
