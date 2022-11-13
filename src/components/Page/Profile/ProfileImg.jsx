import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./profile.css";

const ProfileImg = () => {
  return (
    <div>
      <div
        className="container cover-photo d-flex justify-content-center"
        style={{
          height: "30vh",
          width: "100%",
          backgroundImage:
            "url(https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "60% 100%",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="profile-photo"
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            backgroundImage:
              "url(https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
            top: "70%",
          }}
        ></div>
      </div>

      <div className="user-info mt-5 text-center font-color">
        <div className="fs-6 d-flex justify-content-center">
          <div className="name">
            <h2 className="">Akash Chakrabortty </h2>
          </div>
          <div className="owner-div text-primary d-flex align-items-center ms-2 p-2 input-bg bg-body rounded">
            <FontAwesomeIcon icon={faCheck} className="" />
            <span>Owner</span>
          </div>
        </div>
        <p>Learner || Programmer</p>
      </div>
    </div>
  );
};

export default ProfileImg;
