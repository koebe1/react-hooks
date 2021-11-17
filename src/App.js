import "./App.css";
import React, { useReducer, useState } from "react";

// dispatch(arg) -> argument gets passed here as action
const reducer = (currentState, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...currentState.todos, { text: action.text, completed: false }]
      };
    case "toggle-todo":
      return {
        todos: currentState.todos.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    default:
      return currentState;
  }
};

const App = () => {
  // useReducer:
  // is used to store state and is an alternative to the useState hook

  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState("");

  return (
    <div style={{ marginLeft: "2vw", marginTop: "2vw" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      {todos.map((e, index) => (
        <div
          key={index}
          onClick={dispatch({ type: "toggle-todo", index })}
          style={{ textDecoration: e.completed ? "line-through" : "" }}
        >
          {e.text}
        </div>
      ))}
    </div>
  );
};

export default App;
