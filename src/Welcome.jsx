import { Link, useParams } from "react-router-dom";
// import Age from "./Age";
export default function Welcome() {
  const { name = `Guest` } = useParams();
  return (
    <div>
      <h1>
        Welcome,<strong>{name}!</strong>!
      </h1>
      {/* <Age age={age} /> */}
      <Link to="/login">login to the app</Link>
    </div>
  );
}
