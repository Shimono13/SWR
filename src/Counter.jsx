import CounterDisplay from "./CounterDisplay";
import React, { useEffect, useRef, useState } from "react";

export default function Counter({ valore, valoreIniziale }) {
  const [counter, setCounter] = useState(valoreIniziale);
  const directionRef = useRef(null);

  useEffect(() => {
    // Compare the current count with the initial value to determine the direction
    if (counter > valoreIniziale) {
      directionRef.current = "up";
    } else if (counter < valoreIniziale) {
      directionRef.current = "down";
    }

    // Check if the direction has changed from the previous value
    if (
      directionRef.current &&
      directionRef.current !== directionRef.previous
    ) {
      console.log("Direction changed:", directionRef.current);
    }

    // Store the current direction as the previous direction for the next comparison
    directionRef.previous = directionRef.current;
  }, [counter, valoreIniziale]);

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
