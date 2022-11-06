import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AfterLoginRoute from "../components/AfterLoginRoute/AfterLoginRoute";
import Active from "../components/Chat/Active";
import Chat from "../components/Chat/Chat";
import ChatInbox from "../components/Chat/ChatInbox";
import ChatNav from "../components/Chat/ChatNav";
import Story from "../components/Chat/Story";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MainRoute from "../components/MainRoute/MainRoute";
import Nav from "../components/Nav/Nav";
import Edit from "../components/Profile/Edit";
import Friend from "../components/Profile/Friend";
import Interaction from "../components/Profile/Interaction";
import Post from "../components/Profile/Post";
import ProfileImg from "../components/Profile/ProfileImg";
import ProfileInfo from "../components/Profile/ProfileInfo";
import ProfileNav from "../components/Profile/ProfileNav";

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
        element: (
          <>
            <ProfileImg></ProfileImg>
            <ProfileNav></ProfileNav>
            <ProfileInfo></ProfileInfo>
          </>
        ),
      },
      {
        path: "/chatHome",
        element: <Chat></Chat>,
      },
    ],
  },
  {
    path: "/",
    element: (
      <>
        <ChatNav></ChatNav>
        <Outlet></Outlet>
      </>
    ),
    children: [
      {
        path: "/inbox",
        element: <ChatInbox></ChatInbox>,
      },
      {
        path: "/active",
        element: <Active></Active>,
      },
      {
        path: "/story",
        element: <Story></Story>,
      },
    ],
  },
  {
    path: "/",
    element: (
      <>
        <Nav></Nav>
        <ProfileImg></ProfileImg>
        <ProfileNav></ProfileNav>
        <Outlet></Outlet>
      </>
    ),
    children: [
      {
        path: "/post",
        index: true,
        element: <Post></Post>,
      },
      {
        path: "/interaction",
        element: <Interaction></Interaction>,
      },
      {
        path: "/friend",
        element: <Friend></Friend>,
      },
      {
        path: "/edit",
        element: <Edit></Edit>,
      },
    ],
  },
]);

export default router;
