import CounterDisplay from "./CounterDisplay";
import { useCounter } from "./useCounter";

export function Hookcounter({ valoreIniziale = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(valoreIniziale);

  return (
    <div>
      <CounterDisplay count={counter}></CounterDisplay>
      <div className="flex flex-col  space-y-4">
        <button
          className="text-white rounder bg-slate-900 w-max"
          onClick={onDecrement}>
          premi per decrementare
        </button>
        <button
          className="text-white rounder bg-slate-900 w-max"
          onClick={onIncrement}>
          premi per incrementare
        </button>
        <button
          className="text-white rounder bg-slate-900 w-max"
          onClick={onReset}>
          premi per resettare
        </button>
      </div>
    </div>
  );
}
