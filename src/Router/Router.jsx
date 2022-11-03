import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AfterLoginRoute from "../components/AfterLoginRoute/AfterLoginRoute";
import Chat from "../components/Chat/Chat";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MainRoute from "../components/MainRoute/MainRoute";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/create",
        element: <CreateAccount></CreateAccount>,
      },
    ],
  },
  {
    path: "/",
    element: <AfterLoginRoute></AfterLoginRoute>,
    children: [
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
