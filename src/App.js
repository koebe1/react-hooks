import "./App.css";
import React, { useState } from "react";
import Button from "./components/button";
import Form from "./components/form";
import { ApiData } from "./components/apiData";

const App = () => {
  const [count, setCount] = useState(0);

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
