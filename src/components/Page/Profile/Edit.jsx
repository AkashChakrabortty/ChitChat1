import React, { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { UserInfo } from "../../../UserContext/AuthProvider";

const Edit = () => {
  let photoUrl;
  const navigate = useNavigate();
  const { updateUser, user, setReFetch, reFetch } = useContext(UserInfo);
  const [loader, setLoader] = useState(false);
  const handleForm = (event) => {
    event.preventDefault();
    setLoader(true);
    const name = event.target.name.value;
    const study = event.target.study.value;
    const works = event.target.works.value;
    const lives = event.target.lives.value;
    const relationship = event.target.Relationship.value;

    const img = event.target.photo.files[0];
    const imgbb_key = process.env.REACT_APP_imgbb_key;

    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        photoUrl = data.data.display_url;
      })
      .then(() => {
        updateUser(name, photoUrl);

        const editInfo = {
          email: user.email,
          study: study,
          works: works,
          lives: lives,
          relationship: relationship,
          name: name,
          photoUrl: photoUrl,
        };
        console.log(editInfo);

        fetch(`http://localhost:5000/edit/${user.email}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(editInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoader(false);
            setReFetch(!reFetch);
            navigate("/profile");
          });
      });
  };
  return (
    <div className="container mt-2">
      <div className="study mx-auto col-sm-10 border p-2 font-color">
        {loader ? (
          <div
            className="spinner-border text-info d-flex justify-content-center col-3 mx-auto"
            role="status"
          ></div>
        ) : (
          <Form onSubmit={handleForm}>
            <Form.Group className="mb-3">
              <Form.Label>Change Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Your name"
                className="input-bg font-color"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Change Photo:</Form.Label>
              <Form.Control
                type="file"
                name="photo"
                placeholder="Enter Your Photo"
                className="input-bg font-color"
                accept=".jpg"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Study:</Form.Label>
              <Form.Control
                type="text"
                name="study"
                placeholder="Study"
                className="input-bg font-color"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Works at:</Form.Label>
              <Form.Control
                type="text"
                name="works"
                placeholder="Works at"
                className="input-bg font-color"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Lives in:</Form.Label>
              <Form.Control
                type="text"
                name="lives"
                placeholder="Lives in"
                className="input-bg font-color"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Relationship Status:</Form.Label>
              <select
                name="Relationship"
                className="form-select"
                id="inputGroupSelect01"
              >
                <option selected value="Single">
                  Single
                </option>
                <option value="Married">Married</option>
                <option value="In a relationship">In a relationship</option>
              </select>
            </Form.Group>

            <div className="d-sm-flex justify-content-between">
              <div className="text-center">
                <Button variant="outline-warning" type="submit">
                  Save Changes
                </Button>
              </div>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default Edit;
