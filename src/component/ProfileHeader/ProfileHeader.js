import React from "react";
import notification from '../../assets/img/notification.svg';
import user_icon from '../../assets/img/user_icon.svg';
import down_icon from '../../assets/img/down_icon.svg';
import { Button } from "react-bootstrap";
import circle_download from '../../assets/img/circle_download.svg';
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {

    const navigation = useNavigate();

    return (

        <div className="sidebar_mar">
            <div className="header">
                <div className="user-info">
                    <img src={notification} alt='notification' className="notification-icon" />
                    <img src={user_icon} alt='user_icon' className="user-icon" onClick={() => navigation('/ProfileHeader')} />
                    <span className="username">username@gmail.com</span>
                    <img src={down_icon} alt='down_icon' className="dropdown-arrow" />
                </div>
            </div>

            <div className="profile_btn_styles">
                <h3>Profile</h3>
                <Button type="button">Edit Project</Button>
            </div>

            <div className="profile_content">

                <div className="img_download">
                    <img src={circle_download} alt="circle_download" />

                </div>

                <div className="profile_ditz">
                    <div className="name_email_Number">
                        <p>Name:</p>
                        <h4>Indexed documents</h4>
                    </div>

                    <div className="name_email_Number">
                        <p>Email Address:</p>
                        <h4>Currently indexing documents</h4>
                    </div>

                    <div className="name_email_Number">
                        <p>Phone Number:</p>
                        <h4>Failed to index documents</h4>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProfileHeader;
