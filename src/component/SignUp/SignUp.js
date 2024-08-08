import React, { useEffect, useState } from "react";
import ai_img from "../../assets/img/ai_img.svg";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import next_icon from "../../assets/img/next_icon.svg";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/img/google.svg";
import facebook from "../../assets/img/facebook.svg";
import { useDispatch, useSelector } from "react-redux";
import { clearDataSignUp, signupUser } from "../../redux/signupSlice";
import { useGoogleLogin } from "@react-oauth/google";
import {
  clearGoogleLoginData,
  googleLogin,
} from "../../redux/GoogleSignInSlice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  const [phnNumber, setPhnNumber] = useState("");
  const [from, setFrom] = useState();
  const [fromScreen, setFromScreen] = useState(2);
  const [country, setCountry] = useState("61");

  const handleOnChange = (value) => {
    console.log(value);
    //setMobileNumber(va);
    setCountry(value);
  };

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const onNextClick = () => {
    const payload = {
      type: 2,
      countryCode: "+" + country,
      mobileNumber: phnNumber,
      signUpWithMobileOrEmail: 1,
    };

    dispatch(signupUser(payload));
  };

  const [id, setId] = useState();

  const signInResponse = useSelector((state) => state.signupReducer.data);
  const googleLoginResponse = useSelector(
    (state) => state.googleLoginReducer.data
  );

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const payload = {
        googleId: tokenResponse.access_token,
      };
      dispatch(googleLogin(payload));
    },
  });

  // const onNextClick = () => {
  //   from = 0;
  //   const payload = {
  //     type: 1,
  //     mobileNumber: phnNumber,
  //     signUpWithMobileOrEmail: 1,
  //   };

  //   dispatch(signupUser(payload));
  // };

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  useEffect(() => {
    console.log("SignIn Response ===>", signInResponse);
    if (signInResponse != null && signInResponse.status === 1) {
      setFrom(0);
      console.log("Data ===> ", signInResponse.data._id);
      setId(signInResponse.data._id);
      // gotoAnotherScreen();
    } else {
      if (signInResponse != null) {
        alert(signInResponse.message);
      }
    }
  }, [signInResponse]);
  useEffect(() => {
    console.log("SignIn Response ===>", signInResponse);
    if (googleLoginResponse != null && googleLoginResponse.status === 1) {
      setFrom(1);
      console.log("Data ===> ", googleLoginResponse.data._id);
      localStorage.setItem("token", googleLoginResponse.token);
      setId(googleLoginResponse.data._id);
    }
  }, [googleLoginResponse]);

  useEffect(() => {
    if (id != null) {
      if (from == 0) {
        console.log("otp");
        navigation("/Otp", { state: { id, fromScreen } });
        dispatch(clearDataSignUp());
      } else {
        console.log("google======>");
        navigation("/Project");
        dispatch(clearGoogleLoginData());
      }
    }
  }, [id]);

  const gotoAnotherScreen = () => {};

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
          <div className="text_btn">
            <h4>Already have an account?</h4>
            <Button
              onClick={() => navigation(-1)}
              style={{ cursor: "pointer" }}
            >
              Sign In
            </Button>
          </div>
          <div className="signup_form">
            <Form>
              <h3>Sign Up</h3>
              <Form.Group
                className="mb-3 form_group"
                controlId="formBasicEmail"
              >
                <Form.Label>Phone Number</Form.Label>

                <div className="btn_flex mb-3">
                  <PhoneInput
                    inputClass={"inputt-ph"}
                    containerStyle={{}}
                    searchClass="search-class"
                    disableSearchIcon={false}
                    enableTerritories
                    countryCodeEditable={false}
                    placeholder="Phone Number"
                    buttonStyle={{ width: "47px" }}
                    dropdownStyle={{ height: "150px" }}
                    enableSearch={true}
                    value={country}
                    onChange={handleOnChange}
                    inputProps={{
                      readOnly: true, // This makes the input read-only
                    }}
                    enableAreaCodeStretch
                  />
                  <Form.Control
                    type="number"
                    className="mobilenumber"
                    placeholder="Pone Number"
                    value={phnNumber}
                    onChange={(v) => setPhnNumber(v.target.value)}
                  />
                </div>
              </Form.Group>
              {/* <p>Forgot Account?</p> */}
              <div className="next_btn">
                <Button
                  // onClick={() => {
                  //   navigation("/Integrations");
                  // }}

                  onClick={() => onNextClick()}
                  style={{ cursor: "pointer" }}
                >
                  Next
                </Button>
                <img src={next_icon} alt="next_icon" />
              </div>
              <div class="separator">
                <span>or</span>
              </div>
              <div className="goog_fac_btn">
                <div
                  to="/"
                  class="button facebook"
                  style={{ cursor: "pointer" }}
                  onClick={() => login()}
                >
                  <img src={google} alt="google" /> Google
                </div>
                <Link
                  to="/"
                  class="button facebook"
                  style={{ cursor: "pointer" }}
                >
                  <img src={facebook} alt="facebook" /> Facebook
                </Link>
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

export default SignUp;