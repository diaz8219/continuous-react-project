import "./Profile.css";
import Header from "../components/Header";
import InfoProfile from '../components/InfoProfile'
import { useEffect, useState } from "react";
import { endpoints } from "../api/apiManagementSystem";
import { useNavigate } from 'react-router-dom'

const Perfil = () => {
  let userAuth = JSON.parse(localStorage.getItem("user"));
  let redirect = useNavigate();

  const [user, setUser] = useState([]);

  function getUserProfile() {
    fetch(`${endpoints.profiles}/${userAuth.id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getUserProfile()

    let token = localStorage.getItem("accessToken");

    if (token) {
      redirect("/profile", { replace: true }); // If there is an access token, redirect to /profile
    }
  }, [])

  console.log(user)

  return (
    <div>
      <Header />
      <InfoProfile userProfile={user} name={userAuth.nombre} />
    </div>
  );
};

export default Perfil;
