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
import Inbox from "../components/Page/Inbox/Inbox";
import Notification from "../components/Page/Notification/Notification";
import People from "../components/Page/People/People";
import Edit from "../components/Page/Profile/Edit";
import Friend from "../components/Page/Profile/Friend";
import Interaction from "../components/Page/Profile/Interaction";
import Post from "../components/Page/Profile/Post";
import ProfileImg from "../components/Page/Profile/ProfileImg";
import ProfileInfo from "../components/Page/Profile/ProfileInfo";
import ProfileNav from "../components/Page/Profile/ProfileNav";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

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
        path: "/login",
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
    element: (
      <PrivateRoute>
        <AfterLoginRoute></AfterLoginRoute>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/home",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <>
            <PrivateRoute>
              <ProfileImg></ProfileImg>
              <ProfileNav></ProfileNav>
              <ProfileInfo></ProfileInfo>
            </PrivateRoute>
          </>
        ),
      },
      {
        path: "/chatHome",
        element: (
          <PrivateRoute>
            <Chat></Chat>
          </PrivateRoute>
        ),
      },
      {
        path: "/people",
        element: (
          <PrivateRoute>
            <People></People>
          </PrivateRoute>
        ),
      },
      {
        path: "/notification",
        element: (
          <PrivateRoute>
            <Notification></Notification>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <>
        <PrivateRoute>
          {" "}
          <ChatNav></ChatNav>
          <Outlet></Outlet>
        </PrivateRoute>
      </>
    ),
    children: [
      {
        path: "/inbox",
        element: (
          <PrivateRoute>
            <ChatInbox></ChatInbox>
          </PrivateRoute>
        ),
      },
      {
        path: "/active",
        element: (
          <PrivateRoute>
            <Active></Active>
          </PrivateRoute>
        ),
      },
      {
        path: "/story",
        element: (
          <PrivateRoute>
            <Story></Story>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <>
        <PrivateRoute>
          <Nav></Nav>
          <ProfileImg></ProfileImg>
          <ProfileNav></ProfileNav>
          <Outlet></Outlet>
        </PrivateRoute>
      </>
    ),
    children: [
      {
        path: "/post",
        index: true,
        element: (
          <PrivateRoute>
            <Post></Post>
          </PrivateRoute>
        ),
      },
      {
        path: "/interaction",
        element: (
          <PrivateRoute>
            <Interaction></Interaction>
          </PrivateRoute>
        ),
      },
      {
        path: "/friend",
        element: (
          <PrivateRoute>
            <Friend></Friend>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit",
        element: (
          <PrivateRoute>
            <Edit></Edit>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/inbox/friend:email",
    element: <Inbox></Inbox>,
  },
]);

export default router;
