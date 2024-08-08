import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import {
  API_KEY,
  CLIENT_ID,
  DISCOVERY_DOCS,
  SCOPES,
} from "../../utils/Constants";

// const CLIENT_ID = "YOUR_CLIENT_ID.apps.googleusercontent.com";
// const API_KEY = "YOUR_API_KEY";
// const DISCOVERY_DOCS = [
//   "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
// ];
// const SCOPES = "https://www.googleapis.com/auth/drive.readonly";

const GoogleDrive = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const start = () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          setIsSignedIn(authInstance.isSignedIn.get());
          authInstance.isSignedIn.listen(setIsSignedIn);
        })
        .catch((err) => {
          setError(`Error initializing GAPI client: ${err.error}`);
        });
    };

    gapi.load("client:auth2", start);
  }, []);

  const handleSignIn = () => {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        listFiles();
      })
      .catch((err) => {
        setError(`Error signing in: ${err.error}`);
      });
  };

  const listFiles = () => {
    gapi.client.drive.files
      .list({
        pageSize: 10,
        fields: "nextPageToken, files(id, name)",
      })
      .then((response) => {
        console.log("Files ===> ", response.result);
        setFiles(response.result.files);
      })
      .catch((err) => {
        setError(`Error listing files: ${err.error}`);
      });
  };

  return (
    <div className="sidebar_mar">
      <h2>Google Drive Files</h2>
      {error && <p>Error: {error}</p>}
      {!isSignedIn ? (
        <button onClick={handleSignIn}>Sign in with Google</button>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file.id}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoogleDrive;
