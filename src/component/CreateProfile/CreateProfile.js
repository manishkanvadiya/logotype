import React from "react";
import ai_img from "../../assets/img/ai_img.svg";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CreateProfile = () => {
  return (
    <>
      <div className="inner">
        <div className="sec_bg">
          <div className="logotype">
            <img src={ai_img} alt="ai_img" />
            <h3>Logotype</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="signup_bg">
          <div className="text_btn"></div>
          <div className="signup_form">
            <Form>
              <h3>Create Profile</h3>
              <div className="d_flex">
                <Form.Group
                  className="mb-3 form_group"
                  controlId="formBasicEmail"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    className="createInput"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 form_group"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    className="createInput"
                  />
                </Form.Group>
              </div>
              <Form.Group
                className="mb-3 form_group"
                style={{ marginBottom: 12 }}
                controlId="formBasicEmail"
              >
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email Address"
                  className="createInput"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 form_group"
                style={{ marginBottom: 12 }}
                controlId="formBasicEmail"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Email Address"
                  className="createInput"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 form_group"
                style={{ marginBottom: 12 }}
                controlId="formBasicEmail"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  className="createInput"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 form_group"
                controlId="formBasicEmail"
              >
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Confirm password"
                  className="createInput"
                />
              </Form.Group>
              <div className="next_btn">
                <Button style={{ marginTop: 10 }}>Submit</Button>
              </div>
            </Form>
          </div>
          <p>
            Protected by reCAPTCHA and subject to the Rhombus <br />
            <b>Privacy Policy</b> and <b>Terms of Service.</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
