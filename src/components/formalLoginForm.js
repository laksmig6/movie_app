import React, { useState } from "react";

const FormalLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    let x = document.forms["loginForm"]["username"].value;
    if (x === "") {
      alert("name must be filled out");
    }
  };

  return (
    <form
      className="formal-login mt-5"
      name="loginForm"
      onSubmit={validateForm}
    >
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(username);
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={() => {
          setPassword(password);
        }}
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default FormalLoginForm;
