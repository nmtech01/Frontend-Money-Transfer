export const BASE_URL = "http://localhost:8000";

export const AUTH = {
  login: "/api/login/",
  signup: "/api/register/",
  getUserProfile: "/api/user-profile/",
  updateUserProfile: "/api/edit-profile/",
  logout:'/api/logout/',
  changePassword:'/api/change-password/',
  forgotPassword:'/api/forgot-password/',
  resetPassword:'/api/reset-password/',
  graphApi:'/api/pie-chart/'
};

export const TRANSACTIONS={
   requestMoney:'/api/money-request/',
   transactionList:'/api/money-request-list/',
   withdrawMoney:'/api/withdraw-money-request/',
   transactionDetail:'/api/transaction-detail/?id=',
   deleteTransaction:'/api/transaction-delete/',
   updateTransaction:'/api/transaction-update/'
}
