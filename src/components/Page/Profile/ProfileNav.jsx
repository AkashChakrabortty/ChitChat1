import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserInfo } from "../../../UserContext/AuthProvider";

const ProfileNav = () => {
  let activeClassName = "font-color";
  let inActiveClassName = "font-color text-decoration-none ";
  const { user } = useContext(UserInfo);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/friend/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFriends(data.length));
  }, [user]);
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
          Friend{friends > 0 ? `(${friends})` : undefined}
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
