import Link from "next/link";

async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data.results;
}

export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Characters</h1>

      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            <Link href={`/characters/${char.id}`}>
              {char.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}