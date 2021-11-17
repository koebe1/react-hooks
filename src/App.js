import "./App.css";
import React, { useState, useMemo, useEffect } from "react";

// useMemo good for optimizing computed values
// --> only recompute if inputs change
// start without useMemo and try after with it to compare

const computeLongestWord = arr => {
  if (!arr) {
    return [];
  }

  console.log("computing longest word!");

  let longestWord = "";

  arr.forEach(sentence =>
    sentence.split(" ").forEach(word => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
  );

  return longestWord;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  const url =
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json";

  // fetching api data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, [url]);

  // first argument the function with the expensive computation
  // second argument are the dependencies
  const longestWord = useMemo(() => computeLongestWord(data), [
    computeLongestWord,
    data
  ]);

  return (
    <div style={{ marginLeft: "2vw", marginTop: "2vw" }}>
      <div>count: {count}</div>
      <button onClick={() => setCount(prev => prev + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
};

export default App;
