import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  let activeClassName = "text-black";
  let inActiveClassName = "text-black-50 text-decoration-none ";
  return (
    <div className="container">
      <nav className="d-flex gap-2">
        <div className="left col-8 fs-2 d-flex justify-content-evenly">
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
        </div>

        <div className="right col-4 d-flex align-items-center">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
