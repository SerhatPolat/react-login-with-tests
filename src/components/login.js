import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [userInput, setUserInput] = useState("");

  const loginFunc = () => {
    setUser(userInput);
  };

  const logoutFunc = () => {
    setUser("");
    setUserInput("");
  };

  let loggedInMessage;
  let loginForm;

  if (user) {
    loggedInMessage = (
      <div>
        <p>{user} logged in!</p>
        <button onClick={logoutFunc} className="logoutBtn">
          Log out
        </button>
      </div>
    );
  } else {
    loginForm = (
      <form>
        <h1>Welcome!</h1>
        <label htmlFor="username" className="nameLabel">
          Name:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={loginFunc} className="loginBtn">
          Login
        </button>
      </form>
    );
  }

  return (
    <>
      <div>
        {loggedInMessage}
        {loginForm}
      </div>
    </>
  );
}
