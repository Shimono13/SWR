export default function MouseClicker() {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <button
      className="rounded bg-orange-500 "
      name="SimpleButton"
      onClick={handleClick}>
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/free-url-4595856-3804984.png?f=webp&w=256"
        width={48}
        height={48}
      />
      Clicca Qui
    </button>
  );
}
