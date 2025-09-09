import Login from "../views/Login";
import Home from "../views/Home";
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
    path: "/home",
    element: <RouteProtection protectedPath={<Home />} />,
  },
  {
    path: "*",
    element: <h1>Error 404: Not found.</h1>,
  },
];
