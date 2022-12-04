import {
  faEnvelope,
  faPeopleGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";
import img from "../Page/Chat/icon.jpg";
import "./Nav.css";
import Popover from "./Popover.jsx";

const Nav = () => {
  const { user, reFetch } = useContext(UserInfo);
  const [req, setReq] = useState(0);
  let activeClassName = "font-color";
  let inActiveClassName = "font-color text-decoration-none ";

  let activeClassNameM = "text-warning nav-m";
  let inActiveClassNameM = "text-warning";

  useEffect(() => {
    fetch(`http://localhost:5000/request/${user.email}`)
      .then((res) => res.json())
      .then((data) => setReq(data.length));
  }, [user, reFetch]);

  return (
    <div className="container">
      <nav className="">
        <div className="d-flex justify-content-between">
          <div className="left d-none d-sm-block fs-3 col-11">
            <div className="d-flex justify-content-evenly">
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
                to="/people"
                className={({ isActive }) =>
                  isActive ? activeClassName : inActiveClassName
                }
              >
                People{req > 0 ? `(${req})` : undefined}
              </NavLink>
            </div>
          </div>

          <div className="icon-nav d-sm-none d-flex justify-content-evenly fs-1 col-11">
            <NavLink to="/home">
              <img
                src={img}
                alt="ChitChat"
                style={{
                  height: "40px",
                  border: "1px solid",
                  borderRadius: "50%",
                }}
              />
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? activeClassNameM : inActiveClassNameM
              }
            >
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink
              to="/chatHome"
              className={({ isActive }) =>
                isActive ? activeClassNameM : inActiveClassNameM
              }
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>

            {/* <NavLink
            to="/notification"
            className={({ isActive }) =>
              isActive ? activeClassNameM : inActiveClassNameM
            }
          >
            <FontAwesomeIcon icon={faBell} />
          </NavLink> */}

            <NavLink
              to="/people"
              className={({ isActive }) =>
                isActive ? activeClassNameM : inActiveClassNameM
              }
            >
              <FontAwesomeIcon icon={faPeopleGroup} />
            </NavLink>

            {/* <Popover></Popover> */}
          </div>

          <Popover></Popover>
        </div>

        <div className="right col-md-4 col-6 my-2 mx-auto align-items-center">
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
