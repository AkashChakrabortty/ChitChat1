import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";
import "./profile.css";

const ProfileImg = () => {
  const { user, email } = useContext(UserInfo);
  return (
    <div>
      <div className="col-6 mx-auto d-flex justify-content-center">
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="img-fluid"
          style={{ borderRadius: "50%", height: "30vh", width: "50%" }}
        />
      </div>

      <div className="user-info mt-2 text-center font-color">
        <div className="fs-6 d-flex justify-content-center">
          <div className="name">
            <h2 className=""> {user.displayName}</h2>
          </div>

          {email === "akashchakrabortty2000@gmail.com" ? (
            <div className="owner-div text-primary d-flex align-items-center ms-2 p-2 input-bg bg-body rounded">
              <FontAwesomeIcon icon={faCheck} className="" />
              <span>Owner</span>
            </div>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;
