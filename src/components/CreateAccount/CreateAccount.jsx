import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./style.css";
const CreateAccount = () => {
  return (
    <div>
      <div id="create-container" className="col-12 position-absolute">
        <div
          id="create-section"
          className="col-6 col-md-4 position-relative top-50 start-50 border p-2 rounded"
        >
          <h2 className="text-center">Create New Account</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-sm-flex justify-content-between">
              <div className="text-center">
                <Button variant="outline-primary" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
          <div>
            <h4 className="text-center">Create by</h4>
            <div className="login-icon d-flex justify-content-evenly">
              <div className="fb">
                <FaFacebook className="fs-3" />
              </div>
              <div className="gmail">
                <SiGmail className="fs-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
