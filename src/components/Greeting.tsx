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
    <div className="flex flex-col gap-32 sm:gap-16 items-center w-full text-center">
      <h1 className={`fade-in-out ${fadeIn ? "fade-in" : "fade-out"} text-5xl sm:text-6xl md:text-[5rem] font-bold font-cursive italic leading-[4rem]`}>{TEXTS[index % TEXTS.length]}</h1>
      <p className="text-xl">i&apos;m jackson, a software engineer.</p>
    </div>
  );
};
