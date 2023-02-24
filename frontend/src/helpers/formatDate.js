const formatDate = (dateString) => {
  const [year, month, day] = dateString.split("-").map(Number);
  const formattedDate = `${day}, ${new Date(year, month - 1).toLocaleString(
    "default",
    { month: "long" }
  )} ${year}`;

  return formattedDate;
};

export default formatDate;
