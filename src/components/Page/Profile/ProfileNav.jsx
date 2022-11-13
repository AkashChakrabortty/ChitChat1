import React from "react";
import { NavLink } from "react-router-dom";

const ProfileNav = () => {
  let activeClassName = "font-color";
  let inActiveClassName = "font-color text-decoration-none ";
  return (
    <div>
      <div className="profile-route col-12 fs-2 d-flex justify-content-evenly">
        <NavLink
          to="/post"
          className={({ isActive }) =>
            isActive ? activeClassName : inActiveClassName
          }
        >
          Post
        </NavLink>
        <NavLink
          to="/interaction"
          className={({ isActive }) =>
            isActive ? activeClassName : inActiveClassName
          }
        >
          Interaction
        </NavLink>
        <NavLink
          to="/friend"
          className={({ isActive }) =>
            isActive ? activeClassName : inActiveClassName
          }
        >
          Friend
        </NavLink>
        <NavLink
          to="/edit"
          className={({ isActive }) =>
            isActive ? activeClassName : inActiveClassName
          }
        >
          Edit
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileNav;
