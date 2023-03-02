import React, { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";
import "./style.css";
const CreateAccount = () => {
  const { createUser, updateUser, setUserId } = useContext(UserInfo);
  const [password, setPassword] = useState(undefined);
  const [loader, setLoader] = useState(false);
  let photoUrl;
  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();
     setLoader(true);
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
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
        createUser(email, password).then((userCredential) => {
          updateUser(name, photoUrl);

          setUserId(userCredential.uid);
          const user = {
            name: name,
            email: email,
            password: password,
            photoUrl: photoUrl,
          };
          fetch("https://chitchat-zeta.vercel.app/create", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => navigate("/home"));
        });
      });

  };

  return (
    <div className="default-bg ">
      <div id="create-container" className="col-12 position-absolute">
        <div
          id="create-section"
          className="col-6 col-md-4 position-relative top-50 start-50 border p-2 rounded shadow-lg p-3 mb-5 bg-body-tertiary"
        >
          {loader ? (
            <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <h2 className="text-center">Create New Account</h2>
              <Form onSubmit={handleForm}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Your name"
                    required
                    className="input-bg font-color"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control
                    type="file"
                    name="photo"
                    placeholder="Enter Your Photo"
                    required
                    className="input-bg font-color"
                    accept=".jpg"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                    className="input-bg font-color"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="input-bg font-color"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <p className="font-color">
                    {password !== undefined
                      ? `${
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                            password
                          )
                            ? ""
                            : " Password should be 8 characters with uppercase,lowercase,number and special character"
                        }
                  `
                      : undefined}
                  </p>
                </Form.Group>
                <div className="d-sm-flex justify-content-between">
                  <div className="text-center">
                    {/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                      password
                    ) ? (
                      <button className="btn btn-primary" type="submit">Submit</button>
                    ) : (
                      <button className="btn btn-primary" type="submit" disabled>Submit</button>
                    )}
                  </div>
                </div>
              </Form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
