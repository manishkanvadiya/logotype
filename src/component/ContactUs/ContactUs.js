import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ContactUs = () => {
  return (
    <>
      <div className="inner contact_us sidebar_mar">
        <div className="signup_bg">
          <div className="mb-4 signup_form ">
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
                <Form.Label>Description</Form.Label>
                <textarea type="text" placeholder="Description" rows="5" />
              </Form.Group>
              <div className="next_btn">
                <Button style={{ marginTop: 10 }}>Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
