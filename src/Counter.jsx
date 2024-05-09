import CounterDisplay from "./CounterDisplay";

export default function Counter({ valore, valoreIniziale }) {
  const [counter, setCounter] = useState(valoreIniziale);

  //   useEffect(() => {
  //     console.log(`${counter}`);
  //     return () => {
  //       console.log(`value of counter is ${counter}`);
  //     };
  //   }, [counter]);

  const incrementaClick = () => {
    setCounter(counter + 1);
  };

  const decrementaClick = () => {
    setCounter(counter - valore);
  };

  const ResettaClick = () => {
    setCounter(valoreIniziale);
  };

  return (
    <div>
      <CounterDisplay count={counter}></CounterDisplay>
      <div className="flex flex-col  space-y-4">
        <button
          className="text-white rounder bg-slate-900 w-max"
          onClick={decrementaClick}>
          premi per decrementare di 2
        </button>
        <button
          className="text-white rounder bg-slate-900 w-max"
          onClick={incrementaClick}>
          premi per incrementare
        </button>
        <button
          className="text-white rounder bg-slate-900 w-max"
          onClick={ResettaClick}>
          premi per resettare
        </button>
      </div>
    </div>
  );
}
