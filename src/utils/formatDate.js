const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 31;
const YEAR = MONTH * 12;

export function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export function timeAgo(value) {
  const createdDate = new Date(value);
  const date = new Date();

  let timeAgoDate = date - createdDate;
  timeAgoDate = timeAgoDate / 1000;

  if (timeAgoDate < 2 * MINUTE) return "1 minute ago";
  if (timeAgoDate < HOUR)
    return `${Math.floor(timeAgoDate / MINUTE)} minutes ago`;
  if (timeAgoDate < 2 * HOUR) return "1 hour ago";
  if (timeAgoDate < DAY) return `${Math.floor(timeAgoDate / HOUR)} hours ago`;
  if (timeAgoDate < 2 * DAY) return "1 day ago";
  if (timeAgoDate < MONTH) return `${Math.floor(timeAgoDate / DAY)} days ago`;
  if (timeAgoDate < 2 * MONTH) return "1 month ago";
  if (timeAgoDate < YEAR)
    return `${Math.floor(timeAgoDate / MONTH)} months ago`;
  if (timeAgoDate < 2 * YEAR) return "1 year ago";
  if (timeAgoDate >= 2 * YEAR) return `${timeAgoDate / YEAR} years ago`;
}
