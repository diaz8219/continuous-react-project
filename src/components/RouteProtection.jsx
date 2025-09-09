import { Navigate } from "react-router-dom";
import { missingAuthTokenAlert } from "../utils/alerts";

const RouteProtection = ({ protectedPath }) => {
  let token = JSON.parse(localStorage.getItem("accessToken"));

  return token
    ? protectedPath
    : (missingAuthTokenAlert(), (<Navigate to={"/"} />));
};

export default RouteProtection;
