import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setUser(login);
  };

  let loggedInMessage;
  let loginForm;

  user
    ? (loggedInMessage = (
        <div>
          <p>{user} logged in!</p>
        </div>
      ))
    : (loginForm = (
        <form>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setLogin(e.target.value)}
          />
          <button onClick={submitHandler}>Login</button>
        </form>
      ));
  return (
    <>
      <div>
        {loggedInMessage}
        {loginForm}
      </div>
    </>
  );
}
