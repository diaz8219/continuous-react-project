import "./Login.css";
import { useState } from "react";
import { users } from "../utils/dataBase.js";
import { useNavigate } from "react-router-dom";
import { generalAlert, successLoginAlert } from "../utils/alerts.js";

const LogIn = () => {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  let redirect = useNavigate();

  function searchUser() {
    let auth = users.find(
      (user) => getEmail == user.email && getPassword == user.password
    );

    return auth;
  }

  function logIn() {
    console.log();
    if (searchUser()) {
      successLoginAlert(searchUser().name, redirect, "/home");
    } else if (getEmail == "" || getPassword == "") {
      generalAlert(
        "Invalid credentials",
        "Please do not leave the input fields empty.",
        "error"
      );
    } else {
      generalAlert(
        "Invalid credentials",
        "Please enter your credentials again.",
        "error"
      );
    }
  }

  return (
    <div className="form-container">
      <form className="form">
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input
            required=""
            autoComplete="off"
            type="email"
            placeholder="Enter email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            required=""
            autoComplete="off"
            type="text"
            placeholder="Enter password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={logIn} className="submit">
          Sign in
        </button>

        <p className="signup-link">
          No account?
          <a href="">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
