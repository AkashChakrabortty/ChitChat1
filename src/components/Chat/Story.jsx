import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Story = () => {
  return (
    <div className="col-10 mx-auto row row-cols-2 justify-content-evenly mt-2">
      <div className="setStory border rounded col-5 align-items-center d-flex justify-content-center">
        <FontAwesomeIcon icon={faPlus} className="fs-1" />
      </div>
      <div
        className="showStory border rounded col-5"
        style={{ height: "200px" }}
      ></div>
    </div>
  );
};

export default Story;
