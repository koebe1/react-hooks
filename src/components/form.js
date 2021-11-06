import React, { useEffect } from "react";
import { useForm } from "./useForm";

export default function Form() {
  const [values, handleChange] = useForm({ email: "", password: "" });

  // gets called on every render of component by default
  useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
        window.removeEventListener('mousemove', onMouseMove)
    }
  }, []);

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
