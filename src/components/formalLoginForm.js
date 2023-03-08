import React, { useState } from "react";

const FormalLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    let x = document.forms["loginForm"]["username"].value;
<<<<<<< Updated upstream
    if ((x = "")) {
      alert("name must be filled out");
=======
    let y = document.forms["loginForm"]["password"].value;
    if (x === "" || y === "") {
      alert("username and password must be filled out");
>>>>>>> Stashed changes
    }
  };

  return (
<<<<<<< Updated upstream
    <form name="loginForm" onSubmit={validateForm}>
      <label for="username">UserName</label>
=======
    <form
      className="formal-login mt-5"
      name="loginForm"
      onSubmit={validateForm}
    >
      <label htmlFor="username">UserName</label>
>>>>>>> Stashed changes
      <input
        type="text"
        name="username"
        value={username}
<<<<<<< Updated upstream
        onChange={setUsername(username)}
      />
      <label for="password">Password</label>
=======
        onChange={() => {
          setUsername(username);
        }}
      />
      <label htmlFor="password">Password</label>
>>>>>>> Stashed changes
      <input
        type="password"
        name="password"
        value={password}
<<<<<<< Updated upstream
        onChange={setPassword(password)}
=======
        onChange={() => {
          setPassword(password);
        }}
>>>>>>> Stashed changes
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default FormalLoginForm;
