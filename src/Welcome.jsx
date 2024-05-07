import Age from "./Age";
export default function Welcome({ name = "Guest", age }) {
  return (
    <div>
      <h1>
        Welcome,<strong>{name}</strong>!
      </h1>
      {/* <p>Your age is {age}!</p> */}
      {age && age > 18 && age < 65 && name == "John" && <Age age={age} />}
    </div>
  );
}
