import { toast } from "react-toastify";
import { AUTH, BASE_URL } from "../constants/APIinventory";
import { ApiClient } from "../utilities/api";
import axios from "axios";
const authData= localStorage.getItem(
  'user_data',
)
const AUTH_DATA=authData?JSON.parse(authData):null
var TOKEN= AUTH_DATA ?'Token '+AUTH_DATA?.token:null
function login(param) {
  return new Promise((resolve, reject) => {
    ApiClient.post(`${BASE_URL}${AUTH.login}`, param)
      .then((resp) => {
        // localStorage.setItem(
        //   "authToken",
        //   resp.data?.payload?.token ? resp.data?.payload?.token : ""
        // );
        resolve(resp);
      })
      .catch((error) => {
        const errorMsg = error?.response?.data?.msg || "An error occurred";
        toast.error(errorMsg);
        reject(errorMsg);
      });
  });
}

function signup(body) {
  return new Promise((resolve, reject) => {
    ApiClient.post(`${BASE_URL}${AUTH.signup}`, body)
      .then((resp) => {
        // localStorage.setItem(
        //   "authToken",
        //   resp.data?.payload?.token ? resp.data?.payload?.token : ""
        // );
        
        resolve(resp);
      })
      .catch((error) => {
        const errorMsg = error?.response?.data?.msg || "An error occurred";
        toast.error(errorMsg);
        reject(errorMsg);
      });
  });
}

export function loginApi(data) {
  return new Promise((resolve, reject) =>
    axios
      .post(
        `${BASE_URL}${AUTH.login}`,
        data
      )
      .then(function (response) {
        localStorage.setItem('user_data',JSON.stringify(response?.data?.data))
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        
      })
  );
}
export function sigupApi(data) {
  return new Promise((resolve, reject) =>
    axios
      .post(
        `${BASE_URL}${AUTH.signup}`,
        data
      )
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        
      })
  );
}

export function getUserProfileApi(data) {
  return new Promise((resolve, reject) =>
    axios
      .get(
        `${BASE_URL}${AUTH.getUserProfile}`,
        {
          headers: {
            Authorization:TOKEN,
          },
        }
      )
      .then(function (response) {
        localStorage.setItem('user_data',JSON.stringify(response?.data?.data))
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        
      })
  );
}
export function updateUserProfileApi(data) {

  return new Promise((resolve, reject) =>
    axios
      .post(
        `${BASE_URL}${AUTH.updateUserProfile}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            Authorization:TOKEN,
          },
        }
      )
      .then(function (response) {
        console.log("rssssss",response);
        resolve(response);
      })
      .catch(function (error) {
        console.log("errr",error);

        reject(error);
        
      })
  );
}
export function changePassword(data) {

  return new Promise((resolve, reject) =>
    axios
    .post(
      `${BASE_URL}${AUTH.changePassword}`,
      data
      )
      .then(function (response) {

        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        
      })
  );
}
export function forgotPassword(data) {
  return new Promise((resolve, reject) =>
    axios
    .post(
      `${BASE_URL}${AUTH.forgotPassword}`,
      data
      )
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error); 
      })
  );
}
export function logoutApi(data) {
  console.log("TOKEN",TOKEN);
  return new Promise((resolve, reject) =>
    axios
      .post(
        `${BASE_URL}${AUTH.logout}`,
         data
      )
      .then(function (response) {
        console.log("Response",response);
      //  localStorage.removeItem('user_data')
        resolve(response);
      })
      .catch(function (error) {
        console.log("---------errre",error);

        reject(error);
        
      })
  );
}
export { login, signup };