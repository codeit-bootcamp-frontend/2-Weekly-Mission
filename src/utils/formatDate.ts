const formatDate = (dateString: string) => {
  const date = dateString.split("T")[0];
  return `${date}`;
};
export default formatDate;
