export default function Character({ name, species, image }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{species}</p>
      <img 
        src={image} 
        alt={name}/>
    </div>
  );
}