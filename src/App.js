import "./App.css";
import React, { useReducer } from "react";

// dispatch(arg) -> argument gets passed here as action
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    default:
      return currentState;
  }
};

const App = () => {
  // useReducer:
  // is used to store state and is an alternative to the useState hook

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div style={{ marginLeft: "2vw", marginTop: "2vw" }}>count: {count}</div>
      {/* pattern of dispatch function similar to redux */}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </>
  );
};

export default App;
