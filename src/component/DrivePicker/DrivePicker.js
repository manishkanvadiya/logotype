import React, { useEffect } from "react";

import useDrivePicker from "react-google-drive-picker";
import { API_KEY, CLIENT_ID } from "../../utils/Constants";
const DrivePicker = () => {
  const [openPicker, data, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId: CLIENT_ID,
      developerKey: API_KEY,
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
    });
  };

  useEffect(() => {
    if (data) {
      data.docs.map((i) => console.log(i));
    }
  }, []);
  return (
    <div>
      <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
};

export default DrivePicker;
