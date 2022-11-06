import React from "react";
import { NavLink } from "react-router-dom";

const ProfileNav = () => {
  let activeClassName = "text-black";
  let inActiveClassName = "text-black-50 text-decoration-none ";
  return (
    <div>
      <div className="profile-route col-12 fs-2 d-flex justify-content-evenly">
        <NavLink to="/post" className="text-black-50">
          Post
        </NavLink>
        <NavLink to="/story" className="text-black-50">
          Story
        </NavLink>
        <NavLink to="/friend" className="text-black-50">
          Friend
        </NavLink>
        <NavLink to="/edit" className="text-black-50">
          Edit
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileNav;
