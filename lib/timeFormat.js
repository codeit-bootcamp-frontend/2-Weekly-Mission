export default function getLogTime(sourcetime) {
  const createdDate = new Date(sourcetime);
  const now = new Date();
  const timeDiff = now - createdDate;

  const minutesDiff = Math.floor(timeDiff / (1000 * 60));

  if (minutesDiff < 2) {
    return '1 minute ago';
  }

  if (minutesDiff <= 59) {
    return `${minutesDiff} minutes ago`;
  }

  const hoursDiff = Math.floor(minutesDiff / 60);
  if (hoursDiff < 24) {
    return hoursDiff === 1 ? `1 hour ago` : `${hoursDiff} hours ago`;
  }

  const daysDiff = Math.floor(hoursDiff / 24);
  if (daysDiff < 31) {
    return daysDiff === 1 ? `1 day ago` : `${daysDiff} days ago`;
  }

  const monthsDiff = Math.floor(daysDiff / 31);
  if (monthsDiff < 12) {
    return monthsDiff === 1 ? `1 month ago` : `${monthsDiff} months ago`;
  }

  const yearsDiff = Math.floor(monthsDiff / 12);
  return yearsDiff === 1 ? `1 year ago` : `${yearsDiff} years ago`;
}
