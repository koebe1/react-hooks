import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "./components/button";
import Form from "./components/form";
import { ApiData } from "./components/apiData";

const App = () => {
  const state = parseInt(localStorage.getItem("count"));
  // set to 0 if no state exists ---> else get state from local storage
  // initial state argument to set initial state gets disregarded on subsequent rerenders
  const [count, setCount] = useState(() => (isNaN(state) ? 0 : state));

  //set count to localStorage
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const handleChange = () => {
    setCount(curr => (curr += 1));
  };

  return (
    <div style={{ paddingLeft: "2vw" }}>
      <Form />
      <Button count={count} handleChange={handleChange} />
      <ApiData count={count} />
    </div>
  );
};

export default App;
