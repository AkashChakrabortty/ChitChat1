import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  let activeClassName = "font-color";
  let inActiveClassName = "font-color text-decoration-none ";
  return (
    <div className="container">
      <nav className="">
        <div className="left col-8 fs-3 d-flex  mx-auto justify-content-evenly">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/chatHome"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
          >
            Chat
          </NavLink>
          <NavLink
            to="/notification"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
          >
            Notification(2)
          </NavLink>
          <NavLink
            to="/people"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
          >
            People(2)
          </NavLink>
        </div>

        <div className="right col-sm-4 col-6 my-2 mx-auto align-items-center">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 input-bg"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
