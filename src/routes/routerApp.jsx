import Login from "../views/Login";
import Home from "../views/Home";
import Services from "../views/Services";
import Contact from "../views/Contact";

export let routerApp = [
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "*",
    element: <h1>Error 404: Not found.</h1>
  }
];
