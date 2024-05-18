import { useState } from "react";

function createData() {
  return {
    username: ``,
    password: ``,
    sessione: false,
  };
}

export function useControlledForm() {
  const [data, setData] = useState(createData());

  function handleInputchange(e) {
    const { name, value, type, checked } = e.target;

    setData((data) => ({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleResetForm() {
    setData(createData());
  }

  return {
    username: data.username,
    password: data.password,
    onSession: data.sessione,
    onChange: handleInputchange,
    onReset: handleResetForm,
  };
}
