import Login from "../views/Login";
import Home from "../views/Home";
import Profile from '../views/Profile'
import Services from "../views/Services";
import Contact from "../views/Contact";
import RouteProtection from "../components/RouteProtection";

export let routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/services",
    element: <RouteProtection protectedPath={<Services />} />,
  },
  {
    path: "/contact",
    element: <RouteProtection protectedPath={<Contact />} />,
  },
  {
    path: "/profile",
    element: <RouteProtection protectedPath={<Profile />}/>
  },
  {
    path: "/home",
    element: <RouteProtection protectedPath={<Home />} />,
  },
  {
    path: "*",
    element: <h1>Error 404: Not found.</h1>,
  },
];
