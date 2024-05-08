import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      console.log(`updatin time`);
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalid);
    };
  }, []);

  return <h2>the current time is {time.toLocaleTimeString()}</h2>;
}
