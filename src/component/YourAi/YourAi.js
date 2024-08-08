import React, { useEffect, useRef, useState } from "react";
import notification from "../../assets/img/notification.svg";
import user_icon from "../../assets/img/user_icon.svg";
import down_icon from "../../assets/img/down_icon.svg";
import send_icon from "../../assets/img/send_icon.svg";
import add_circle from "../../assets/img/add_circle.svg";
import ai_icon_new from "../../assets/img/ai_icon_new.svg";
import copy_icon from "../../assets/img/copy_icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getChatHistory } from "../../redux/GetChatHistorySlice";
import { askQuestion } from "../../redux/AskQuestionSlice";
import { getProjectList } from "../../redux/GetProjectListSlice";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { uploadFile } from "../../redux/PdfUploadApiSlice";
import DrivePicker from "../DrivePicker/DrivePicker";

function YourAi() {
  const chatContainerRef = useRef(null);

  const navigation = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [projectId, setProjectId] = useState("");
  const [chatData, setChatData] = useState([]);
  const [question, setQuestion] = useState("");
  const [projectList, setProjectList] = useState([]);
  const [projectName, setProjectName] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showOptionList, setShowOptionList] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const chatResponse = useSelector((state) => state.chatHistoryReducer.data);
  const questionResponse = useSelector(
    (state) => state.askQuestionReducer.data
  );

  const projectResponse = useSelector(
    (state) => state.getProjectListReducer.data
  );

  useEffect(() => {
    if (location.state != null) {
      setProjectId(location.state.id);
    }
    dispatch(getProjectList());
  }, []);

  useEffect(() => {
    console.log("Project Response ===> ", projectResponse);
    if (projectResponse != null && projectResponse.status == 1) {
      setProjectList(projectResponse.data);
      if (projectId == "" && projectResponse.data.length > 0) {
        setProjectId(projectResponse.data[0]._id);
      }
    }
  }, [projectResponse]);

  useEffect(() => {
    if (projectId != "") {
      const payload = {
        id: projectId,
      };
      dispatch(getChatHistory(payload));
    }
  }, [projectId]);

  useEffect(() => {
    console.log("History Data ===> ", chatResponse);
    if (chatResponse != null && chatResponse.status == 1) {
      setChatData(chatResponse.data);
    }
  }, [chatResponse]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    console.log("Chat Data =====>", chatData);
  }, [chatData]);

  const onAskQuestion = () => {
    const payload = {
      projectId: projectId,
      question: question,
    };

    dispatch(askQuestion(payload));
  };

  useEffect(() => {
    console.log("Question Response ===> ", questionResponse);
    if (questionResponse != null && questionResponse.status == 1) {
      setChatData([...chatData, questionResponse.data]);
      setQuestion("");
    }
  }, [questionResponse]);

  const onProjectSelect = (project) => {
    setProjectId(project._id);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Programmatically trigger the file input
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      dispatch(uploadFile(selectedFile));
      console.log(selectedFile);
    }
  };

  const handleGoogleDriveClick = async () => {
    try {
      // Load the Google API script
      const gapi = window.gapi;
      gapi.load("client:auth2", async () => {
        await gapi.client.init({
          apiKey: "AIzaSyBL9EbMxIkBpL9rWy6_s7X3zsZ0vtVu0Ic",
          clientId:
            "878062054698-k0472qbrgk5lgqe8lec86d834075ioeg.apps.googleusercontent.com",
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
          ],
          scope: "https://www.googleapis.com/auth/drive.readonly",
        });

        const GoogleAuth = gapi.auth2.getAuthInstance();
        await GoogleAuth.signIn();

        const response = await gapi.client.drive.files.list({
          pageSize: 10,
          fields: "files(id, name)",
        });

        console.log(response);

        // Implement the logic to handle the file selection
      });
    } catch (error) {
      console.error("Error accessing Google Drive", error);
    }
  };

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
        <h2 className="margin_top">Your Al</h2>
      </div>
      <div className="sidebar_det">
        <button className="active_button">Active</button>
        <select className="project-select">
          {projectList.map((project) => (
            <option
              key={project._id}
              value={project.projectName}
              onClick={() => onProjectSelect(project)}
            >
              {project.projectName}
            </option>
          ))}
        </select>
      </div>

      <div className="scroll_content" ref={chatContainerRef}>
        {chatData.length > 0 &&
          chatData.map((message, index) => (
            <div className="content" key={index}>
              <div className="conversation">
                <div className="message">
                  <div className="message_content">
                    <div className="user_chat">
                      <p>{message.request}</p>
                    </div>
                  </div>
                  <div className="message-meta">
                    <img
                      src={ai_icon_new}
                      alt="ai_icon_new"
                      className="ai_icon_new"
                    />
                    <span className="ai_contents">{message.response}</span>
                    <div className="day_img">
                      <img src={copy_icon} alt="copy_icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="input-area">
        <div
          className="pdf_file"
          onClick={() => setShowOptionList(!showOptionList)}
        >
          <img
            src={add_circle}
            alt="add_circle"
            className="add_circle"
            style={{ cursor: "pointer" }}
          />
          {showOptionList && (
            // <div className="document-optionlist">
            //   <button onClick={handleButtonClick}>Upload Document</button>
            //   <button onClick={handleGoogleDriveClick}>Add from Google Drive</button>
            // </div>
            <div className="document-optionlist">
              <DrivePicker />
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Message for Your Al"
          value={question}
          onChange={(v) => setQuestion(v.target.value)}
        />
        <img
          src={send_icon}
          style={{ cursor: "pointer" }}
          alt="send_icon"
          className="send_icon"
          onClick={() => onAskQuestion()}
        />
      </div>
    </div>
  );
}

export default YourAi;
