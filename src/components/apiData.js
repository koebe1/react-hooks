import React from "react";
import { useFetch } from "./useFetch";

export const ApiData = ({ count }) => {
  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);

  return (
    <div style={{ marginTop: "2vh" }}>{loading ? "loading..." : data}</div>
  );
};
