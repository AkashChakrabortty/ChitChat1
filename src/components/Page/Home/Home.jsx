import {
  faComment,
  faPlus,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <div className="container font-color">
      <div className="shadow-lg input-bg rounded p-3 bg-body border col-8 mx-auto">
        <FontAwesomeIcon icon={faPlus} className="fs-1" />
        <span className="fs-4 p-2">Photo</span>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <input
            className="form-control me-2"
            type="text"
            placeholder="What's on Your mind?"
          />
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control"
                  placeholder="What's on Your mind?"
                  id="floatingTextarea"
                  style={{ height: "35vh" }}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg input-bg mt-2 rounded p-3 bg-body border col-8 mx-auto">
        <img
          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
          alt="Akash Chakrabortty"
          style={{
            height: "50px",
            width: "50px",
          }}
        />
        <p>Akash Chakrabortty</p>
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

      <nav aria-label="Page navigation example">
        <div className="pagination justify-content-center my-3">
          <li className="page-item">
            <a className="page-link input-bg font-color" href="f">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link font-color" href="f">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link font-color" href="f">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link font-color" href="f">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link input-bg font-color" href="f">
              Next
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Home;
