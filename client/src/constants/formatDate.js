function formatDate(inputDate) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(inputDate).toLocaleDateString(
    'en-US',
    options
  );
  return formattedDate;
}

export default formatDate;
