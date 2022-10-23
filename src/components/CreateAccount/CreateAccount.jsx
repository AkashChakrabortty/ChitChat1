import React, { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { UserInfo } from "../../UserContext/AuthProvider";
import "./style.css";
const CreateAccount = () => {
  const { createUser } = useContext(UserInfo);
  const [password, setPassword] = useState(undefined);

  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUser(email, password);
  };
  return (
    <div>
      <div id="create-container" className="col-12 position-absolute">
        <div
          id="create-section"
          className="col-6 col-md-4 position-relative top-50 start-50 border p-2 rounded"
        >
          <h2 className="text-center">Create New Account</h2>
          <Form onSubmit={handleForm}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <p className="text-muted">
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
                  <Button variant="outline-primary" type="submit">
                    Submit
                  </Button>
                ) : (
                  <Button variant="outline-primary" type="submit" disabled>
                    Submit
                  </Button>
                )}
              </div>
            </div>
          </Form>

          {/* <div>
            <h4 className="text-center">Create by</h4>
            <div className="login-icon d-flex justify-content-evenly">
              <div className="fb">
                <FaFacebook className="fs-3" />
              </div>
              <div className="gmail">
                <SiGmail className="fs-3" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
