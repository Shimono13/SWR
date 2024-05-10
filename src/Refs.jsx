import { useRef, useState, useEffect } from "react";

export default function Refs() {
  const inputRef = useRef(null);
  const mountedRed = useRef(null);

  useEffect(() => {
    if (!mountedRed.current) {
      console.log("Component mounted for the first time");
      mountedRed.current = true;
    }
  }, []);

  return <input type="username  " />;
}
