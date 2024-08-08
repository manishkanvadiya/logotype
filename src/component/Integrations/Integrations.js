import React, { useState } from "react";
import notification from "../../assets/img/notification.svg";
import user_icon from "../../assets/img/user_icon.svg";
import down_icon from "../../assets/img/down_icon.svg";
import drive_2 from "../../assets/img/drive_2.svg";
import gmail_2 from "../../assets/img/gmail_2.svg";
import weather from "../../assets/img/weather.svg";
import s_icon from "../../assets/img/s_icon.svg";
import o_icon from "../../assets/img/o_icon.svg";
import c_icon from "../../assets/img/c_icon.svg";
import { useNavigate } from "react-router-dom";
import GoogleDrive from "../googleDrive";
import GooglePicker from "../googleDrive/GooglePicker";

const Integrations = () => {
  const navigation = useNavigate();
  const [isOn, setIsOn] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (!isOn) {
      setIsPickerVisible(true);
    } else {
      setIsPickerVisible(false);
    }
  };
  

  return (
    <>
      <div className="sidebar_mar">
        <div className="header">
          <div className="user-info">
            <img
              src={notification}
              alt="notification"
              className="notification-icon"
            />
            <img
              src={user_icon}
              alt="user_icon"
              className="user-icon"
              onClick={() => navigation("/ProfileHeader")}
            />
            <span className="username">username@gmail.com</span>
            <img src={down_icon} alt="down_icon" className="dropdown-arrow" />
          </div>
        </div>

        <div className="about_content">
          <h2>Integrations</h2>
          <GooglePicker isPickerVisible={isPickerVisible} />
          <div className="google_card">
            <div className="google_style">
              <h4>Google</h4>
            </div>
            <div className="switch_img">
              <img src={drive_2} alt="drive_2" className="drive_2" />
              <img src={gmail_2} alt="gmail_2" className="gmail_2" />
              <div
                className={`switch ${isOn ? "on" : "off"}`}
                onClick={toggleSwitch}
              >
                <div className="toggle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
