import Character from "../../../components/Character";

export async function generateStaticParams() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return data.results.map((char) => ({
    id: char.id.toString(),
  }));
}

async function getCharacter(id) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return response.json();
}

export default async function CharacterDetail(props) {
  const { id } = await props.params;

  const character = await getCharacter(id);

  return (
    <main>
        <Character
        name={character.name}
        species={character.species}
        image={character.image}
      />
    </main>
  );
}