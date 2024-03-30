export const BASE_URL = "http://44.206.90.142:8000";

export const AUTH = {
  login: "/api/login/",
  signup: "/api/register/",
  getUserProfile: "/api/user-profile/",
  updateUserProfile: "/api/edit-profile/",
  logout:'/api/logout/',
  changePassword:'/api/change-password/',
  forgotPassword:'/api/forgot-password/',
  resetPassword:'/api/reset-password/'
};

export const TRANSACTIONS={
   requestMoney:'/api/money-request/',
   transactionList:'/api/money-request-list/'
}
