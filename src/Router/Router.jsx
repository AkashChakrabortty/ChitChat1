import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AfterLoginRoute from "../components/AfterLoginRoute/AfterLoginRoute";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import MainRoute from "../components/MainRoute/MainRoute";
import Nav from "../components/Nav/Nav";
import Active from "../components/Page/Chat/Active";
import Chat from "../components/Page/Chat/Chat";
import ChatInbox from "../components/Page/Chat/ChatInbox";
import ChatNav from "../components/Page/Chat/ChatNav";
import Story from "../components/Page/Chat/Story";
import Home from "../components/Page/Home/Home";
import Notification from "../components/Page/Notification/Notification";
import People from "../components/Page/People/People";
import Edit from "../components/Page/Profile/Edit";
import Friend from "../components/Page/Profile/Friend";
import Interaction from "../components/Page/Profile/Interaction";
import Post from "../components/Page/Profile/Post";
import ProfileImg from "../components/Page/Profile/ProfileImg";
import ProfileInfo from "../components/Page/Profile/ProfileInfo";
import ProfileNav from "../components/Page/Profile/ProfileNav";

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
      {
        path: "/people",
        element: <People></People>,
      },
      {
        path: "/notification",
        element: <Notification></Notification>,
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
