import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generalAlert, successLoginAlert } from "../utils/alerts.js";
import { generateToken } from "../utils/functions.js";
import { endpoints } from "../api/apiManagementSystem.js";

const LogIn = () => {
  // Setting up state variables
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  let redirect = useNavigate();

  // API -> GET Operation
  function getUsers() {
    fetch(endpoints.users)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }

  // Async functions to perform as soon as the webpage gets loaded
  useEffect(() => {
    getUsers();
    let token = localStorage.getItem("accessToken");

    if (token) {
      redirect("/home", { replace: true }); // If there is an access token, redirect to /home
    }
  }, []);

  // Search if user exists in DB
  function searchUser() {
    let auth = users.find(
      (user) => getEmail == user.correo && getPassword == user.contraseña
    );

    return auth;
  }

  // Log in function
  function logIn() {
    console.log();
    if (searchUser()) {
      let accessToken = generateToken();
      // Set localStorage items for user authentication
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(searchUser()));

      successLoginAlert(searchUser().nombre, redirect, "/home"); // If log in is successful then redirect to /home
    } else if (getEmail == "" || getPassword == "") {
      // If any input fields are empty, throw alert
      generalAlert(
        "Invalid credentials",
        "Please do not leave any empty input fields.",
        "error"
      );
    } else {
      // If any input fields is invalid, throw alert
      generalAlert(
        "Invalid credentials",
        "Please enter your credentials again.",
        "error"
      );
    }
  }

  return (
    <div className="form-container">
      <form className="form-container__form">
        <p className="form-container__form__p">Log in to your account</p>
        <div className="form-container__form__input">
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
        <div className="form-container__form__input">
          <input
            required=""
            autoComplete="off"
            type="password"
            placeholder="Enter password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={logIn}
          className="form-container__form__btn"
        >
          Sign in
        </button>

        <p className="form-container__form__signup">
          No account?
          <a href="">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
