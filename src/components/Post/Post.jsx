import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";
const Post = () => {
  const { userId, user } = useContext(UserInfo);
  // console.log(user);
  const [uploaded, setUploaded] = useState(0);
  const navigate = useNavigate();
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
          const post = {
            user_email: user.email,
            post: text.trim(),
            post_photo: photoUrl,
            user_name: user.displayName,
            user_photo: user.photoURL,
            milliseconds: milliseconds,
          };
          // console.log(post);

          //insert db
          fetch("http://localhost:5000/post", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(post),
          })
            .then((res) => res.json())
            .then((data) => {
              event.target.reset();
              navigate("/post");
            });
        })
        .catch((error) => console.log(error));
    } else {
      alert("You can't post empty");
    }
  };
  return (
    <div>
      <div className="shadow-lg input-bg rounded p-3 bg-body border col-8 mx-auto text-center">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn col-md-8"
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
              <div className="modal-body">
                {uploaded == 0 ? (
                  <>
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <form onSubmit={handleForm}>
                      <textarea
                        className="form-control"
                        placeholder="What's on Your mind?"
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
                        Post
                      </button>
                    </form>
                  </>
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
    </div>
  );
};

export default Post;
