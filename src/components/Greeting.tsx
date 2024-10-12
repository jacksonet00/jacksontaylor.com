import { useEffect, useState } from "react";

const TEXTS = [
  "hello",
  "hola",
  "bonjour",
  "guten tag",
  "salve",
  "nǐn hǎo",
  "olá",
  "asalaam alaikum",
  "konnichiwa",
  "anyoung haseyo",
  "Zdravstvuyte",
];

export const Greeting = () => {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(!fadeIn);
      if (!fadeIn) {
        setTimeout(() => setIndex(index + 1), 100);
      }
    }, 3000);
    return () => {
      clearTimeout(interval);
    };
  }, [fadeIn, index]);

  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className={`fade-in-out ${fadeIn ? "fade-in" : "fade-out"} text-6xl font-bold`}>{TEXTS[index % TEXTS.length]}</h1>
      <p>i&apos;m jackson, a software engineer.</p>
    </div>
  );
};