import React from "react";

const Interaction = () => {
  return (
    <div className="container">
      <div className="d-flex col-10 mx-auto justify-content-evenly text-center">
        <div className="like col-5 border p-2">
          <h4 className="fs-2">Likes</h4>
          <hr />
          <p>You like Anup's post at 2.30am,6Nov,2022</p>
          <hr />
        </div>
        <div className="comment col-5 border p-2">
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
