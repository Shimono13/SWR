import { useControlledForm } from "./useControlledForm";

export default function Myform() {
  const { username, password, onChange, onReset, onSession } =
    useControlledForm();

  return (
    <div>
      <h1>My Form</h1>
      <input
        className=" bg-fuchsia-200 border-2 m-1 border-fuchsia-950"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        className=" bg-fuchsia-200 border-2  m-1 border-fuchsia-950"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <input
        name="sessione"
        type="checkbox"
        checked={onSession}
        onChange={onChange}
      />
      <button onClick={onReset}>Reset</button>
      <pre>{JSON.stringify({ username, password, onSession }, null, 2)}</pre>
    </div>
  );
}
