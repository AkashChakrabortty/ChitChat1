import React from "react";

const Edit = () => {
  return (
    <div className="container">
      <div className="study col-8 mx-auto">
        <div class="input-group mb-3">
          <label htmlFor="" className="fs-3">
            Study:
          </label>
          <div class="input-group-text">
            <label htmlFor="">Hide:</label>
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
