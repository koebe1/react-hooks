import React, { useEffect } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

export default function Form() {
  const [values, handleChange] = useForm({ email: "", password: "" });

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

  useFetch("http://numbersapi.com/42");

  return (
    <div style={{ marginTop: "2vh" }} className="form">
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
      />
    </div>
  );
}
