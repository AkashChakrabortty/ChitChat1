import React from "react";

const Edit = () => {
  return (
    <div className="container">
      <div className="study mx-auto col-sm-10">
        <div className="input-group mb-3 font-color input-bg bg-body rounded">
          <label htmlFor="" className="fs-3 p-2">
            Study:
          </label>
          <div className="input-group-text font-color input-bg bg-body ">
            <label htmlFor="">Hide:</label>
            <input
              className="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>
          <input
            type="text"
            className="form-control input-bg bg-body"
            aria-label="Text input with checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
