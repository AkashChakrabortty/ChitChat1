import React from "react";
import { Outlet } from "react-router-dom";
import ChatNav from "./ChatNav";

const Chat = () => {
  return (
    <div>
      <ChatNav></ChatNav>
      <Outlet></Outlet>
    </div>
  );
};

export default Chat;
