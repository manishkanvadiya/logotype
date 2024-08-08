import React from "react";
import notification from '../../assets/img/notification.svg';
import user_icon from '../../assets/img/user_icon.svg';
import down_icon from '../../assets/img/down_icon.svg';
import { Button } from "react-bootstrap";
import download_icon from '../../assets/img/download_icon.svg';
import { useNavigate } from "react-router-dom";

const ProjectEdit = () => {

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

            <h2>Projects</h2>
            <div className="project_btn_styles">
                <h3>Project Name</h3>
                <Button type="button" >Edit Project</Button>
            </div>

            <div className="project_edit_content">
                <div className="label_input_flex">
                    <h4>7</h4>
                    <p>Indexed documents
                    </p>
                </div>

                <div className="label_input_flex">
                    <h4>2</h4>
                    <p>Currently indexing documents
                    </p>
                </div>

                <div className="label_input_flex">
                    <h4>0</h4>
                    <p>Failed to index documents
                    </p>
                </div>

                <div className="label_input_flex">
                    <h4>05.15.2024</h4>
                    <p>Document last added
                    </p>
                </div>
            </div>

            <div className="download_btn">
                <img src={download_icon} alt="download_icon" />
                <p>Drop Documents to upload, or <span>browse</span></p>
            </div>

            <div className="your_ai_btn">
                <Button onClick={() => navigation('/YourAi')}>Go to Your Ai</Button>
            </div>
        </div >
    );
};

export default ProjectEdit;
