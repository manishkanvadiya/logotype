import React, { useEffect, useState } from "react";
import notification from "../../assets/img/notification.svg";
import user_icon from "../../assets/img/user_icon.svg";
import down_icon from "../../assets/img/down_icon.svg";
import { Button } from "react-bootstrap";
import next_icon from "../../assets/img/next_icon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProjectList } from "../../redux/GetProjectListSlice";

const Project = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const [projectList, setProjectList] = useState([]);
  const [id, setID] = useState("");

  const projectResponse = useSelector(
    (state) => state.getProjectListReducer.data
  );

  useEffect(() => {
    dispatch(getProjectList());
  }, []);

  useEffect(() => {
    console.log("Project Response ===> ", projectResponse);
    if (projectResponse != null && projectResponse.status == 1) {
      setProjectList(projectResponse.data);
    }
  }, [projectResponse]);

  const setId = (project) => {
    console.log(" set id ===========>", project._id);
    setID(project._id);
  };

  useEffect(() => {
    console.log("id ===========>", id);
    if (id != "") {
      navigation("/YourAi", { state: { id } });
      setID("");
    }
  }, [id]);

  return (
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
      <div className="project_btn_style">
        <h2>Projects</h2>
        <Button type="button" onClick={() => navigation("/CreateProject")}>
          Add New
        </Button>
      </div>
      {projectList.length > 0 &&
        projectList.map((project,index) => (
          <div key={index} className="magic_content_btn" onClick={() => setId(project)}>
            <div className="label_input_flex">
              <h4>{project.projectName}</h4>
              <p>
                {project.streetAddress}, {project.state}, {project.country}
              </p>
            </div>

            <div className="active_btn_content">
              <div className="active_column">
                <button className="active_button">Active</button>
                <p>5 Documents indexed</p>
              </div>
              <img src={next_icon} alt="next_icon" />
            </div>
          </div>
        ))}

      {/* <div className="magic_content_btn">
        <div className="label_input_flex">
          <h4>Black Project</h4>
          <p>TheAd, 9/89-97 Jones St, Ultimo NSW 2007, Australia</p>
        </div>

        <div className="active_btn_content">
          <div className="active_column">
            <button className="active_button">Active</button>
            <p>5 Documents indexed</p>
          </div>
          <img src={next_icon} alt="next_icon" />
        </div>
      </div> */}
    </div>
  );
};

export default Project;
