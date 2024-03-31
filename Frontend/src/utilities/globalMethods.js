import moment from "moment-timezone";
import { toast } from "react-toastify";
export const getCurrentTimeZone = () => {
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Replace "Asia/Calcutta" with "Asia/Kolkata"
  if (timeZone === "Asia/Calcutta") {
    timeZone = "Asia/Kolkata";
  }

  return timeZone;
};
export function capitalizeFirstLetter(str) {
  if (str) {
    return str.replace(/^\w/, c => c.toUpperCase());
  }
  return str;
}

export const getFormatedDate = (date, format = 'MMMM D', timeZone = '') => {
  if (date && moment(date).isValid()) {
      if (timeZone) {
          return moment(date).tz(timeZone).format(format);
      }
      return moment(date).format(format);
  }
  return false;
};
 export  const calculateBillets = (billets200, billets100, billets50) => {
  const total =
    (parseInt(billets200) > 0 ? parseInt(billets200) * 200 : 0) +
    (parseInt(billets100) > 0 ? parseInt(billets100) * 100 : 0) +
    (parseInt(billets50) > 0 ? parseInt(billets50) * 50 : 0) 
  

  return total;
};
  export const calculatePieces = (pieces10, pieces5, pieces1) => {
  const total =
    (parseInt(pieces10) > 0 ? parseInt(pieces10) * 10 : 0) +
    (parseInt(pieces5) > 0 ? parseInt(pieces5) * 5 : 0) +
    (parseInt(pieces1) > 0 ? parseInt(pieces1) * 1 : 0);

  return total;
};

export const calculateTotal = () => {
  const total =
    (parseInt(billets200) > 0 ? parseInt(billets200) * 200 : 0) +
    (parseInt(billets100) > 0 ? parseInt(billets100) * 100 : 0) +
    (parseInt(billets50) > 0 ? parseInt(billets50) * 50 : 0) +
    (parseInt(pieces10) > 0 ? parseInt(pieces10) * 10 : 0) +
    (parseInt(pieces5) > 0 ? parseInt(pieces5) * 5 : 0) +
    (parseInt(pieces1) > 0 ? parseInt(pieces1) * 1 : 0);

  return total;
};

export const isAmountValid = () => {
  const total = calculateTotal();
  const parsedAmount = parseInt(amount); // Parse amount as integer

  return !isNaN(parsedAmount) && total === parsedAmount; // Check if amount is a valid integer and equals total
};