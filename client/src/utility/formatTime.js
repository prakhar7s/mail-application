export function formatTimeShort(time) {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const convertedToDate = new Date(time);
  const date = convertedToDate.getDate();
  const month = convertedToDate.getMonth();
  const year = convertedToDate.toLocaleDateString().split("/")[2];

  return `${months[month]} ${date}, ${year}`;
}

export function formatTimeLong(time) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const convertedToDate = new Date(time);
  const date = convertedToDate.getDate();
  const month = convertedToDate.getMonth();
  const year = convertedToDate.toLocaleDateString().split("/")[2];
  const convertedTime = convertedToDate.toLocaleTimeString();

  return `${months[month]} ${date}, ${year} ... ${convertedTime.substring(
    0,
    5
  )}`;
}
