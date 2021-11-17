import "./App.css";
import React, { useState, useCallback } from "react";
import { Hello } from "./components/Hello";

const App = () => {
  const [count, setCount] = useState(0);

  // function now only gets recreated if count or setCount changes
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, [setCount]);

  return (
    <div style={{ marginLeft: "2vw", marginTop: "2vw" }}>
      <Hello increment={increment} />

      <div>count: {count} </div>
    </div>
  );
};

export default App;
