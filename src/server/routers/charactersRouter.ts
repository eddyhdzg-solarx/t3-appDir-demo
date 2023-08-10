import { t } from "../trpc";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: {
    name: string;
    url: URL;
  };
  image: string;
  episode: string[];
  url: URL;
  created: Date;
}

export const charactersRouter = t.router({
  getCharacters: t.procedure.query(async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    const data = (await response.json()) as { results: Character[] };
    return data.results;
  }),
});
