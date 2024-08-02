import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
// import Login from "../pages/Auth/login/login";
import Register from "./../pages/Auth/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      // {
      //   path: "/user/register",
      //   element: <Register />,
      // },
    ],
  },
]);

export default router;
