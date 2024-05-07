import Age from "./Age";
export default function Welcome({ name = "Guest", age }) {
  return (
    <div>
      <h1>
        Welcome,<strong>{name}</strong>!
      </h1>
      <Age age={age} />
    </div>
  );
}
