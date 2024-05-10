import { useEffect, useRef, useState } from "react";
// import Welcome from "./Welcome";
export default function Login({ onSubmit }) {
  const [data, setData] = useState({
    username: ``,
    password: ``,
    sissy: false,
  });

  const inputRef = useRef(null);

  // grazie all'effetto collaterale di useeffect e useref possiamo interagine con gli elemtni del dom node

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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

  function handleReset() {
    setData({
      username: "",
      password: "",
      sissy: false,
    });
  }
  function handleData(e) {
    e.preventDefault();
    onSubmit(data);
  }
  console.log(inputRef);
  return (
    <div className=" ">
      <form action="" onSubmit={handleData}>
        <div className="flex flex-col gap-4">
          <input
            value={data.username}
            ref={inputRef}
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
          <div className="flex gap-2">
            {" "}
            <button
              type="submit"
              disabled={!data.username || !data.password}
              className="rounded w-max bg-slate-100">
              LOGIN
            </button>
            <button className="w-max bg-slate-50 rounded" onClick={handleReset}>
              RESET
            </button>
          </div>
        </div>

        {/* <Welcome
        name={data.username.toLocaleUpperCase()}
        age={data.password}></Welcome>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </form>
    </div>
  );
}
