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


