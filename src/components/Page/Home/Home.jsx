import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";

const Home = () => {
  const { userId } = useContext(UserInfo);

  let photoUrl;
  const handleForm = (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    const img = event.target.photo.files[0];
    const imgbb_key = process.env.REACT_APP_imgbb_key;

    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;

    //upload photo imgbb
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        photoUrl = data.data.display_url;
      })
      .then(() => {
        const post = {
          uid: userId,
          text: text,
          photo: photoUrl,
        };
        console.log(post);

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
            console.log(data);
            event.target.reset();
          });
      });
  };

  return (
    <div className="container font-color">
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
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
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
                    Submit
                  </button>
                </form>
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
