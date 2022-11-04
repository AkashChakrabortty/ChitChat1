import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from "./icon.jpg";

const ChatNav = () => {
  let activeClassName = "text-black";
  let inActiveClassName = "text-black-50 text-decoration-none ";
  return (
    <div className="mt-2 container">
      <nav>
        <div className="col-12 fs-4 d-flex">
          <div className="left col-2 text-center">
            <Link to="/home">
              <img
                src={img}
                alt="ChitChat"
                style={{
                  height: "40px",
                  border: "1px solid",
                  borderRadius: "50%",
                }}
              />
            </Link>
          </div>

          <div className="right col-10 d-flex justify-content-evenly">
            <NavLink
              to="/chatinbox"
              className={({ isActive }) =>
                isActive ? activeClassName : inActiveClassName
              }
            >
              Chat
            </NavLink>
            <NavLink
              to="/active"
              className={({ isActive }) =>
                isActive ? activeClassName : inActiveClassName
              }
            >
              Active
            </NavLink>
            <NavLink
              to="/story"
              className={({ isActive }) =>
                isActive ? activeClassName : inActiveClassName
              }
            >
              Story
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ChatNav;
