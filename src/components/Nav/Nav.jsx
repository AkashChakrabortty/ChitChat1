import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container">
      <nav className="d-flex gap-2">
        <div className="left col-8 fs-2 d-flex justify-content-evenly">
          <Link className="text-decoration-none text-black-50" to="/home">
            Home
          </Link>
          <Link className="text-decoration-none text-black-50 " to="/profile">
            Profile
          </Link>
          <Link className="text-decoration-none text-black-50" to="/chat">
            Chat
          </Link>
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
