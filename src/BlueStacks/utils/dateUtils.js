import { MONTHS_ARRAY_SHORT } from '../constants/dateConstants';

export const convertToFormat = (date, format = 'mm-dd-yyyy', nappendZero) => {
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  let year = date.getFullYear();

  if (!nappendZero) {
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  }
  let finalDate;
  const separator = format.indexOf('/') > -1 ? '/' : '-';
  switch (format.toLowerCase()) {
    case 'ddmmyyyy':
      finalDate = `${
        MONTHS_ARRAY_SHORT[date.getMonth()]
      } ${date.getFullYear()}, ${day}`;
      break;
    default:
      finalDate = [day, month, year].join(separator);
  }

  return finalDate;
};

export const daysBetween = (date1, date2) => {
  // The number of milliseconds in one day
  let ONE_DAY = 1000 * 60 * 60 * 24;

  // Convert both dates to milliseconds and set to midnight
  let date1Obj = new Date(date1).setHours(0, 0, 0, 0);
  let date2Obj = new Date(date2).setHours(0, 0, 0, 0);

  // Calculate the difference in milliseconds
  let diff = Math.abs(date2Obj - date1Obj);

  // Convert back to days and return
  return Math.ceil(diff / ONE_DAY);
};

//compare two dates
export const compareDates = (dateFirst, dateSecond) => {
  dateFirst.setHours(0, 0, 0, 0);
  dateSecond.setHours(0, 0, 0, 0);
  if (dateFirst.getTime() === dateSecond.getTime()) {
    return 0;
  } else if (dateFirst < dateSecond) {
    return -1;
  } else if (dateFirst > dateSecond) {
    return 1;
  }
};
