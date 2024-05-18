import React, { useState } from "react";

export function useCounter(valoreIniziale = 0) {
  const [counter, setCounter] = useState(valoreIniziale);

  const incrementaClick = () => {
    setCounter(counter + 1);
  };

  const decrementaClick = () => {
    setCounter(counter - 1);
  };

  const ResettaClick = () => {
    setCounter(valoreIniziale);
  };

  return {
    counter: counter,
    onIncrement: incrementaClick,
    onDecrement: decrementaClick,
    onReset: ResettaClick,
  };
}
