import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
const TEXTS = ["Scotland", "Alba"];

export default function TitleWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      8000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        style={{ fontWeight: 10 }}
        springConfig={presets.molasses}
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
}
