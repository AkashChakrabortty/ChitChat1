import {
  faComment,
  faPlus,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="shadow-lg rounded p-3 bg-body border col-8 mx-auto">
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
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <textarea
                  class="form-control"
                  placeholder="What's on Your mind?"
                  id="floatingTextarea"
                  style={{ height: "35vh" }}
                ></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg mt-2 rounded p-3 bg-body border col-8 mx-auto">
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
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="f">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="f">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="f">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="f">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="f">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
