import React, { useEffect, useState } from "react";
import notification from "../../assets/img/notification.svg";
import user_icon from "../../assets/img/user_icon.svg";
import down_icon from "../../assets/img/down_icon.svg";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDataCreateProject,
  createProject,
} from "../../redux/CreateProjectSlice";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const navigation = useNavigate();

  const addProjectResponse = useSelector(
    (state) => state.createProjectReducer.data
  );

  const dispatch = useDispatch();

  const addProject = () => {
    if (projectName.length < 1) {
      alert("Please enter project name!");
    } else if (city.length < 1) {
      alert("Please enter city!");
    } else if (zip.length < 1) {
      alert("Please enter zip code!");
    } else if (address.length < 1) {
      alert("Please enter street Address!");
    } else {
      const payload = {
        projectName: projectName,
        companyName: companyName,
        country: country,
        city: city,
        state: state,
        streetAddress: address,
        zipCode: zip,
      };

      dispatch(createProject(payload));
    }
  };

  useEffect(() => {
    if (addProjectResponse != null && addProjectResponse.status == 1) {
      navigation(-1);
      dispatch(clearDataCreateProject());
    }
  }, [addProjectResponse]);

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
      <form>
        <div className="add_project_style">
          <h2>Add Projects</h2>
          <p>General Information</p>
        </div>

        <div className="two_input_flex">
          <div className="label_input_flex">
            <label>Company Name</label>

            <select
              className="project-select"
              onChange={(v) => setCompanyName(v.target.value)}
            >
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
            </select>
          </div>

          <div className="label_input_flex">
            <label>Project Name</label>
            <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(v) => setProjectName(v.target.value)}
            />
          </div>
        </div>

        <div className="two_input_flex">
          <div className="label_input_flex">
            <label>Country</label>
            <select
              className="project-select"
              onChange={(v) => setCountry(v.target.value)}
            >
              <option value="Australia">Australia</option>;
              <option value="America">America</option>;
              <option value="India">India</option>;
            </select>
          </div>

          <div className="label_input_flex">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(v) => setCity(v.target.value)}
            />
          </div>
        </div>

        <div className="two_input_flex">
          <div className="label_input_flex">
            <label>State</label>
            <select
              className="project-select"
              onChange={(v) => setState(v.target.value)}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>

          <div className="label_input_flex">
            <label>Street Address</label>
            <input
              type="text"
              placeholder="Street Address"
              value={address}
              onChange={(v) => setAddress(v.target.value)}
            />
          </div>
        </div>

        <div className="zip_flex">
          <label>Zip</label>
          <input
            type="text"
            placeholder="Zip"
            value={zip}
            onChange={(v) => setZip(v.target.value)}
          />
        </div>
      </form>

      <div className="folder_content">
        <h4>Project folder associations</h4>
        <p>
          Select which project folders data is pulled from for each service you
          are<span> integrated</span> with.
        </p>
      </div>

      <div className="cancel_create_btn">
        <Button className="cancel_btn" style={{ cursor: "pointer" }}>
          Cancel
        </Button>
        <Button
          className="create_btn"
          onClick={() => addProject()}
          style={{ cursor: "pointer" }}
        >
          Create Project
        </Button>
      </div>
    </div>
  );
};

export default CreateProject;
