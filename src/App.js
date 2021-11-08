import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "./components/button";
import Form from "./components/form";
import { ApiData } from "./components/apiData";
import { DisplayUsers } from "./components/displayUsers";
import { UserContext } from "./components/UserContext.js";

const App = () => {
  const state = parseInt(localStorage.getItem("count"));
  const [user, setUser] = useState(null);
  // set to 0 if no state exists ---> else get state from local storage
  // initial state argument to set initial state gets disregarded on subsequent rerenders
  const [count, setCount] = useState(() => (isNaN(state) ? 0 : state));

  console.log(count);
  //set count to localStorage
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  // call random user api to create user
  useEffect(() => {
    const fetchUser = async url => {
      try {
        const res = await fetch(url);
        const userData = await res.json();
        setUser(userData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser("https://randomuser.me/api/");
  }, []);

  const handleChange = () => {
    setCount(curr => (curr += 1));
  };

  return (
    <div style={{ paddingLeft: "2vw" }}>
      <Form />
      <Button count={count} handleChange={handleChange} />
      <ApiData count={count} />

      <UserContext.Provider value={user}>
        <DisplayUsers />
      </UserContext.Provider>
    </div>
  );
};

export default App;
