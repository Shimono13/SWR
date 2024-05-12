import { useState } from "react";

export default function Container({ children, title }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleClick() {
    setCollapsed((prevState) => !prevState);
  }

  return (
    <div className="bg-white border border-red-600 rounded-md flex flex-col gap-4">
      <h1 className="text-2xl font-bold" onClick={handleClick}>
        {title}
      </h1>
      <div className={collapsed ? "block" : "hidden"}>{children}</div>
    </div>
  );
}
