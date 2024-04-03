import { toast } from "react-toastify";
import { AUTH, BASE_URL } from "../constants/APIinventory";
import { ApiClient } from "../utilities/api";
import axios from "axios";
const authData= localStorage.getItem(
  'user_data',
)
const AUTH_DATA=authData?JSON.parse(authData):null
var TOKEN= AUTH_DATA ?'Token '+AUTH_DATA?.token:null
console.log("TOKENE--",TOKEN);



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
            Authorization:data??TOKEN,
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
export function updateUserProfileApi(data,Token) {

  return new Promise((resolve, reject) =>
    axios
      .post(
        `${BASE_URL}${AUTH.updateUserProfile}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            Authorization:Token,
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
export function changePasswordApi(data) {

  return new Promise((resolve, reject) =>
    axios
    .post(
      `${BASE_URL}${AUTH.changePassword}`,
      data,
      {
        headers: {
          Authorization:TOKEN,
        },
      }
      )
      .then(function (response) {

        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        
      })
  );
}
export function resetPasswordApi(data) {

  return new Promise((resolve, reject) =>
    axios
    .post(
      `${BASE_URL}${AUTH.resetPassword}`,
      data,
      )
      .then(function (response) {

        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        
      })
  );
}
export function forgotPasswordApi(data) {
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
       localStorage.removeItem('user_data')
       console.log("After removal:", localStorage.getItem('user_data'));
        resolve(response);
      })
      .catch(function (error) {
        console.log("---------errre",error);

        reject(error);
        
      })
  );
}

export function getGraphApi(data) {
  return new Promise((resolve, reject) =>
    axios
      .get(
        `${BASE_URL}${AUTH.graphApi}`,
        {
          headers: {
            Authorization:data??TOKEN,
          },
        }
      )
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        
      })
  );
}

