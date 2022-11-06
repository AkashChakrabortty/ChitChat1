import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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

      <div className="user-info mt-5 text-center">
        <h2>
          Akash Chakrabortty{" "}
          <span className="text-primary fs-6">
            <FontAwesomeIcon icon={faCheck} />
            Owner
          </span>
        </h2>
        <p>Learner || Programmer</p>
      </div>
    </div>
  );
};

export default ProfileImg;
