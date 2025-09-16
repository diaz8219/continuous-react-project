import { useNavigate } from "react-router-dom";
import { logOutAlert } from "../utils/alerts";
import "./Header.css";

const Header = () => {
  const redirect = useNavigate()

  function logOut() {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("user")
    logOutAlert(redirect, "/")
  }

  return (
    <header className="nav-header">
      <h2 className="nav-header__title">App Management</h2>
      <nav className="nav-header__menu">
        <a href="">Home</a>
        <a href="">Grades</a>
        <a href="">Assistance</a>
        <button onClick={logOut} type="button">Log Out</button>
      </nav>
    </header>
  );
};

export default Header;
