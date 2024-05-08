import { useState } from "react";
import Welcome from "./Welcome";
export default function Login() {
  const [data, setData] = useState({
    username: ``,
    password: ``,
    sissy: false,
  });

  function handleClick(e) {
    const name = e.target.name;

    const value = e.target.value;

    const checked = e.target.checked;

    const type = e.target.type;

    setData((d) => {
      return {
        ...d,
        [name]: type === `checkbox` ? checked : value,
      };
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        value={data.username}
        className=" w-max bg-slate-300"
        type="text"
        onChange={handleClick}
        name="username"
      />
      <input
        value={data.password}
        type="text"
        className=" w-max bg-slate-300"
        onChange={handleClick}
        name="password"
      />
      <input
        type="checkbox"
        onChange={handleClick}
        className="w-max bg-slate-300"
        name="sissy"
        checked={data.sissy}
        id=""
      />
      {/* <Welcome
        name={data.username.toLocaleUpperCase()}
        age={data.password}></Welcome>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
