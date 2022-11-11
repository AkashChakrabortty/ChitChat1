import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";
import "./style.css";
const Login = () => {
  const { LogIn, userId, resetEmail } = useContext(UserInfo);
  const [email, setEmail] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    LogIn(email, password);
  };
  if (userId) {
    return <Navigate to="/home" replace={true} />;
  }

  const handleReset = () => {
    if (email) {
      resetEmail(email);
      alert("Check email");
    } else {
      alert("Enter email");
    }
  };
  return (
    <div id="login-container" className="col-12 position-absolute font-color">
      <div
        id="login-section"
        className="col-6 col-md-4 position-relative top-50 start-50 border p-2 rounded"
      >
        <h2 className="text-center">Login</h2>
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="input-bg font-color"
              name="email"
              type="email"
              placeholder="Enter email"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="input-bg font-color"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <div className="d-sm-flex justify-content-between">
            <div className="text-center">
              <Button variant="outline-warning" type="submit">
                Submit
              </Button>
            </div>
            <div className="text-center d-flex align-items-center justify-content-center">
              <Link onClick={handleReset} className="font-color">
                Forgotten password?
              </Link>
            </div>
          </div>
        </Form>
        <div className="mt-2 text-center">
          <Link to="create">
            <Button variant="outline-warning">Create New Account</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
