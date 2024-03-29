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


