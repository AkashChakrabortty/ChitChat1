import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Chat from "../components/Chat/Chat";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MainRoute from "../components/MainRoute/MainRoute";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/create",
        element: <CreateAccount></CreateAccount>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/chat",
        element: <Chat></Chat>,
      },
    ],
  },
]);

export default router;
