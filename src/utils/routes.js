import Home from "../pages/Home";
import Login from "../pages/Login";
import Warehouse from "../pages/Warehouse/index";
export const routes = [
  {
    title: "Login",
    path: "/login",
    component: Login,
  },
  {
    title: "Login",
    path: "/",
    component: Login,
  },
  {
    title: "Home",
    path: "/home",
    component: Home,
  },
  {
    title: "warehouse",
    path: "/warehouse",
    component: Warehouse,
  },
];
