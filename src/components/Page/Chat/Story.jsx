import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";
const Story = () => {
  const [uploaded, setUploaded] = useState(0);
  const { user } = useContext(UserInfo);
  let photoUrl;
  const handleForm = (event) => {
    event.preventDefault();

    const text = event.target.text.value;
    const img = event.target.photo.files[0];
    const imgbb_key = process.env.REACT_APP_imgbb_key;
    const milliseconds = new Date().getTime();

    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;

    if (text.trim().length > 0 || img) {
      axios
        .post(url, formData, {
          onUploadProgress: (data) => {
            setUploaded(Math.round((data.loaded / data.total) * 100));
          },
        })
        .then((data) => {
          photoUrl = data.data.data.display_url;
          // console.log(data);
          // console.log(photoUrl);
        })
        .then(() => {
          const story = {
            user_email: user.email,
            text: text.trim(),
            story_photo: photoUrl,
            user_name: user.displayName,
            user_photo: user.photoURL,
            milliseconds: milliseconds,
          };
          // console.log(post);

          //insert db
          fetch("http://localhost:5000/story", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(story),
          })
            .then((res) => res.json())
            .then((data) => {
              event.target.reset();
            });
        })
        .catch((error) => console.log(error));
    } else {
      alert("Your story should not empty");
    }
  };
  return (
    <div className="col-10 mx-auto row row-cols-2 justify-content-evenly mt-2">
      <div className="setStory border rounded col-5 align-items-center d-flex justify-content-center">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn col-md-8"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <FontAwesomeIcon icon={faPlus} className="fs-1" />
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
              <div className="modal-body">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                {uploaded === 0 ? (
                  <form onSubmit={handleForm}>
                    <textarea
                      className="form-control"
                      placeholder="What's on Your mind?(Less than 50 characters)"
                      id="floatingTextarea"
                      style={{ height: "35vh" }}
                      name="text"
                    ></textarea>

                    <input
                      type="file"
                      className="form-control my-2"
                      id="inputGroupFile02"
                      accept=".jpg"
                      name="photo"
                    />

                    <button type="submit" className="btn btn-primary">
                      Story
                    </button>
                  </form>
                ) : (
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-label="Example with label"
                      style={{ width: `${uploaded}%` }}
                      aria-valuenow={uploaded}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {uploaded}%
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="showStory border rounded col-5"
        style={{ height: "200px" }}
      ></div>
    </div>
  );
};

export default Story;
