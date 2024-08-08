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

// export const CLIENT_ID =
//   "630737192676-470r9qhp8s5fauvg7d8apcpndpc432as.apps.googleusercontent.com";


export const CLIENT_ID =
  "878062054698-pc5s342mc9kecngkq3u9rnhcaa9chmj2.apps.googleusercontent.com";
// export const API_KEY = "AIzaSyCVsRf6hYy67FdgEYkFGmj97xHYViCD2Bk";
// export const API_KEY = "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";
export const API_KEY = "AIzaSyAQjuXONF86tr-KAwIP8S2ET6kKWdx4b7I";

export const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];
export const SCOPES = "https://www.googleapis.com/auth/drive.readonly";
