import { createBrowserRouter } from "react-router-dom";

import DasboardLayout from "./../layout/dasboardLayout/DasboardLayout";

import Home from "../Dashboard/Home";
import Signin from "../pages/Auth/signin/Signin";
import Signup from "../pages/Auth/signup/Signup";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DasboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
