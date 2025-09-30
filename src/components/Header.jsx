import { useNavigate, Link } from "react-router-dom";
import { logOutAlert } from "../utils/alerts";
import "./Header.css";

const Header = () => {
  let userAuth = JSON.parse(localStorage.getItem("user"));
  let redirect = useNavigate();
  function logOut() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    logOutAlert(redirect, "/");
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">
            <span className="logo-text">📚</span>
          </div>
          <h1 className="platform-name">StudenCare</h1>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/grades" className="nav-link">
                Grades
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-user">
          <div className="user-profile">
            <div className="user-avatar">
              <span className="avatar-text">AV</span>
            </div>
            <div className="user-info">
              <span className="user-name">{userAuth.name}</span>
            </div>
          </div>
          <button onClick={logOut} type="button" className="logout-btn">
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
