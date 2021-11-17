import React, { useContext } from "react";
import { UserContext } from "./UserContext.js";

export const DisplayUsers = () => {
  const message = useContext(UserContext);
  return <div style={{ marginTop: "2vw" }}>{message===null ? "loading user..." : JSON.stringify(message)}</div>;
};
