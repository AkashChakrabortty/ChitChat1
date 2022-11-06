import React from "react";

const Friend = () => {
  return (
    <div className="col-6 mx-auto mt-2 d-flex gap-2 justify-content-center shadow-lg rounded p-3 bg-body">
      <img
        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        alt="Akash Chakrabortty"
        style={{
          height: "50px",
          width: "50px",
        }}
      />
      <div className="content">
        <div className="name">
          <span>Akash Chakrabortty</span>
        </div>
        <div className="message">
          <span> Learner || Programmer</span>
        </div>
      </div>
    </div>
  );
};

export default Friend;
