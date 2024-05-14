import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalid);
    };
  }, []);

  const language = useContext(LanguageContext);
  return (
    <h2>
      {language === `en` ? `the current time is :` : `L'orario corrente è`}
      {time.toLocaleTimeString()}
    </h2>
  );
}
