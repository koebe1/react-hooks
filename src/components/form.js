import React, { useRef, useState } from "react";
import { useForm } from "./useForm";

export default function Form() {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [focus, setFocus] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  // save number of renders
  const renders = useRef(0);
  // increment of renders.current does not cause a rerender!
  console.log(`Form rendered: ${renders.current++} time.`);

  const handleFocus = () => {
    if (!focus) {
      emailRef.current.focus();
      setFocus("email");
    } else {
      if (focus === "password") {
        emailRef.current.focus();
        setFocus("email");
      } else {
        passwordRef.current.focus();
        setFocus("password");
      }
    }
  };

  // set event listener with useEffect

  //   useEffect(() => {
  //     const onMouseMove = e => {
  //       console.log(e);
  //     };

  //     window.addEventListener("mousemove", onMouseMove);

  //     return () => {
  //         window.removeEventListener('mousemove', onMouseMove)
  //     }
  //   }, []);

  return (
    <div style={{ marginTop: "2vh" }} className="form">
      <form>
        <input
          ref={emailRef}
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="email"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button onClick={handleFocus}>Switch Focus</button>
      </form>
    </div>
  );
}
