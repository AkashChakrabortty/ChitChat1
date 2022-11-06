import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
const Post = () => {
  return (
    <div className="container">
      <div className="shadow-lg rounded p-3 bg-body border col-6 mx-auto">
        <img
          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
          alt="Akash Chakrabortty"
          style={{
            height: "50px",
            width: "50px",
          }}
        />
        <p>2.44AM(22NOV,2020)</p>
        <p className="fs-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ratione
          similique tenetur aut. Repudiandae, quo aperiam! Dolorum at facilis
          voluptatum?
        </p>
        <div className="d-flex justify-content-evenly">
          <div className="like">
            <FontAwesomeIcon icon={faThumbsUp} className="fs-2" /> (100)
          </div>
          <div className="comments">
            <FontAwesomeIcon icon={faComment} className="fs-2" />
            (100)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
