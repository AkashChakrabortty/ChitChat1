import React from "react";

const Interaction = () => {
  return (
    <div className="container">
      <div className="d-flex gap-2 col-10 mx-auto justify-content-evenly text-center">
        <div className="like col-md-8 border p-2 font-color">
          <h4 className="fs-2">Likes</h4>
          <hr />
          <p>You like Anup's post at 2.30am,6Nov,2022</p>
          <hr />
        </div>
        <div className="comment col-md-8 border p-2 font-color">
          <h4 className="fs-2">Comments</h4>
          <hr />
          <p>You Comments Anup's post at 2.30am,6Nov,2022</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Interaction;
