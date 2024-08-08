//BASE URL

export const ApiBaseUrl = "https://api.youraiweb.com.au";
// export const ApiBaseUrl = "http://sn-cast-api.sparcknet.com:3001/";

//Api Names
export const signupApi = "/v1/user/login";
// export const signupApi = "api/auth/signin";
export const otpApi = "/v1/user/verifyOtp";
export const createProjectApi = "/v1/user/addProject";
export const getProjectListApi = "/v1/user/getProjectList";
export const getChatHistoryApi = "/v1/user/getChatHistory";
export const askQuestionApi = "/v1/user/askQuestion";
export const googleLoginApi = "/v1/user/signUpGoogle";

//Google drive

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const API_KEY = process.env.REACT_APP_API_KEY;

export const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];
export const SCOPES = "https://www.googleapis.com/auth/drive.readonly";
