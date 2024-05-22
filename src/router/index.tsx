import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../Screens/Login";
import Cadastro from "../Screens/Cadastro";
import Home from "../Screens/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/cadastro",
      element: <Cadastro />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;