export default function UncontrolledForms() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const dataform = new FormData(event.target);

    const data = {
      username: dataform.get("username"),
      password: dataform.get("password"),
    };
    console.log(data);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Uncontrolled Form</h1>
      <input name="username" />
      <input name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
