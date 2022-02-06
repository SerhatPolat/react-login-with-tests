import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState("");

  const loginFunc = (e) => {
    e.preventDefault();
    setUser(login);
  };

  const logoutFunc = () => {
    setUser("");
  };

  let loggedInMessage;
  let loginForm;

  user
    ? (loggedInMessage = (
        <div>
          <p>{user} logged in!</p>
          <button onClick={logoutFunc}>Log out</button>
        </div>
      ))
    : (loginForm = (
        <form>
          <h1>Welcome!</h1>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setLogin(e.target.value)}
          />
          <button onClick={loginFunc}>Login</button>
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
