import React from "react";

const Button = ({ count, handleChange }) => {
  //const [{ count1, count2 }, setCount] = useState({ count1: 0, count2: 0 });

  return (
    <div style={{ marginTop: "5vh" }}>
      <button
        // onClick={() =>
        //   setCount(currentState => ({
        //     count1: currentState.count1 + 1,
        //     count2: currentState.count2 + 2
        //   }))
        // }

        onClick={handleChange}
      >
        +
      </button>
      {/* <div style={{ display: "inline", marginLeft: "1vw" }}>
        count 1: {count1}
      </div>
      <div style={{ display: "inline", marginLeft: "1vw" }}>
        count 2: {count2}
      </div> */}
      <div style={{ display: "inline", marginLeft: "1vw" }}>count: {count}</div>
    </div>
  );
};

export default Button;
