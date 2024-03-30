import { toast } from "react-toastify";
import { AUTH, BASE_URL, TRANSACTIONS } from "../constants/APIinventory";
import axios from "axios";
const authData= localStorage.getItem(
  'user_data',
)
const AUTH_DATA=authData?JSON.parse(authData):null
var TOKEN= AUTH_DATA ?'Token '+AUTH_DATA?.token:null


export function requestMoneyApi(data) {

  return new Promise((resolve, reject) =>
    axios
    .post(
      `${BASE_URL}${TRANSACTIONS.requestMoney}`,
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
export function getTransactionListAPI(data) {
  return new Promise((resolve, reject) =>
    axios
    .get(
      `${BASE_URL}${TRANSACTIONS.transactionList}`,
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

