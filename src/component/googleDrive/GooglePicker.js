import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { API_KEY, CLIENT_ID } from "../../utils/Constants";

// const CLIENT_ID = "878062054698-k0472qbrgk5lgqe8lec86d834075ioeg.apps.googleusercontent.com";
// const API_KEY = "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";
const SCOPES = "https://www.googleapis.com/auth/drive.file";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];

const GooglePicker = ({ isPickerVisible }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [gapiLoaded, setGapiLoaded] = useState(false);

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
          setGapiLoaded(true);
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
        loadPicker();
      })
      .catch((err) => {
        setError(`Error signing in: ${err.error}`);
      });
  };

  const loadPicker = () => {
    gapi.load("picker", () => {
      createPicker();
    });
  };

  const createPicker = () => {
    const oauthToken = gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getAuthResponse().access_token;
    const view = new window.google.picker.View(
      window.google.picker.ViewId.DOCS
    );
    const picker = new window.google.picker.PickerBuilder()
      .setOAuthToken(oauthToken)
      .addView(view)
      .setDeveloperKey(API_KEY)
      .setCallback(pickerCallback)
      .build();
    picker.setVisible(true);
  };

  const pickerCallback = (data) => {
    if (data.action === window.google.picker.Action.PICKED) {
      const file = data.docs[0];
      setSelectedFile(file);
    }
  };

  return (
    <div className="" style={{ marginBottom: "20px" }}>
      <h2>Google Drive Picker</h2>
      {error && <p>Error: {error}</p>}
      {!gapiLoaded ? (
        <p>Loading Google API...</p>
      ) : (
        isPickerVisible && (
          <button onClick={handleSignIn}>Sign in and Open Google Picker</button>
        )
      )}
      {selectedFile && (
        <div>
          <h3>Selected File:</h3>
          <p>Name: {selectedFile.name}</p>
          <p>ID: {selectedFile.id}</p>
        </div>
      )}
    </div>
  );
};

export default GooglePicker;
