import React, { useState } from "react";

const Button = () => {
  const [{ count1, count2 }, setCount] = useState({ count1: 0, count2: 0 });

  return (
    <div>
      <button
        onClick={() =>
          setCount(currentState => ({
            count1: currentState.count1 + 1,
            count2: currentState.count2 + 2
          }))
        }
      >
        +
      </button>
      <div style={{ display: "inline", marginLeft: "1vw" }} className="App">
        count 1: {count1}
      </div>
      <div style={{ display: "inline", marginLeft: "1vw" }} className="App">
        count 2: {count2}
      </div>
    </div>
  );
};

export default Button;
