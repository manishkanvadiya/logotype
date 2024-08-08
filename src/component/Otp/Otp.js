import React, { useEffect, useState } from "react";
import ai_img from "../../assets/img/ai_img.svg";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { clearDataOtp, otpVerification } from "../../redux/OtpSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Otp = ({ routes }) => {
  const [otp, setOtp] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  const { id, fromScreen } = location.state;

  console.log("ID ===> ", id);

  const dispatch = useDispatch();

  const otpResponse = useSelector((state) => state.otpVerificationReducer.data);

  const onSubmitClick = () => {
    const payload = {
      type: 1,
      _id: id,
      otp: otp,
    };

    dispatch(otpVerification(payload));
  };

  useEffect(() => {
    console.log("Otp Response ===> ", otpResponse);
    if (otpResponse != null && otpResponse.status === 1) {
      console.log("Token ===> ", otpResponse.token);
      localStorage.setItem("token", otpResponse.token);
      dispatch(clearDataOtp());
      if (fromScreen == 1) {
        navigate("/Project");
      } else {
        navigate("/CreateProfile");
      }
    } else {
      dispatch(clearDataOtp());
      if (otpResponse != null) {
        alert(otpResponse.message);
      }
    }
  }, [otpResponse]);

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
              <h3>Enter OTP</h3>
              <p className="numnber_otp">
                Enter 6-digit code we just texted to your phone number
                {/* <span>
                  <b>+91 9855 6584 991</b>
                </span> */}
              </p>
              <Form.Group className="mb-3 input_otp" controlId="formBasicEmail">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span className="space"></span>}
                  renderInput={(props) => <input {...props} />}
                />
              </Form.Group>
              <div className="next_btn">
                <Button onClick={() => onSubmitClick()}>Submit</Button>
              </div>
              <div class="separator">
                <span>or</span>
              </div>
              <p className="numnber_otp">Resend Code</p>
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

export default Otp;
