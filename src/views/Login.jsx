import './Login.css'
import { useState } from "react";

const LogIn = () => {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  function logIn() {
    if (getEmail == "correo@correo.com" && getPassword == "admin123") {
      alert("Bienvenido al sistema " + getEmail);
    } else {
      alert("Error de credenciales");
    }
  }

  return (
    <div className='form-container'>
      <form className="form">
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input 
            required=''
            autoComplete='off'
            type="email" 
            placeholder="Enter email"
            id='email'
            onChange={(e) => setEmail(e.target.value)} 
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            required=''
            autoComplete='off'
            type="text" 
            placeholder="Enter password"
            id='email'
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" onClick={logIn} className="submit">
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
