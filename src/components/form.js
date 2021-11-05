import React, { useState } from "react";
import { useForm } from "./useForm";

export default function Form() {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div style={{ marginTop: "2vh" }} className="form">
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}
