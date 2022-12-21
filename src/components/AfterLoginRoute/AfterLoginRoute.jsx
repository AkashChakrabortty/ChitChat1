import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import io from "socket.io-client";
import { UserInfo } from "../../UserContext/AuthProvider";
import Nav from "../Nav/Nav";
const socket = io.connect("https://chitchat-zeta.vercel.app/");
const AfterLoginRoute = () => {
  const { user } = useContext(UserInfo);
  const activeUserInfo = {
    name: user.displayName,
    photo: user.photoURL,
    email: user.email,
  };
  // console.log(activeUserInfo);
   socket.emit("active", activeUserInfo);
    socket.on("message", (message) => {
      console.log(message);
    });
  // console.log(user.email);
  // socket.send('ak')
  // useEffect(() => {
  //    socket.emit("active", activeUserInfo);
  // }, [user]);
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default AfterLoginRoute;
