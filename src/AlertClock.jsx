export default function AlertClock({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className=" text-white rounded bg-slate-900">
        Imposta l'orario
      </button>
    </div>
  );
}
