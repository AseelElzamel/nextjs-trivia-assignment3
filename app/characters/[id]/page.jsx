async function getCharacter(id) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return response.json();
}

export default async function CharacterDetail(props) {
  const { id } = await props.params;

  const character = await getCharacter(id);

  return (
    <main>
      <h1>{character.name}</h1>
      <p>{character.species}</p>
      <img
        src={character.image}
        alt={character.name}
      />
    </main>
  );
}