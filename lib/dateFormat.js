export default function dateFormat(sourceTime, delimiter = '. ') {
  const date = new Date(sourceTime);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].join(delimiter);
}
