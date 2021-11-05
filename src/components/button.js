import React,{useState} from "react";

const Button = () => {

  const [count, setCount] = useState(10);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div style={{ display: "inline", marginLeft: "1vw" }} className="App">
        {count}
      </div>
    </div>
  );
};


export default Button;