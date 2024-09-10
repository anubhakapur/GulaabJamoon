const formatDate = (dateString) => {
  // Check if the input is already in 'YYYY-MM-DD' format
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return dateString;
  }

  // Parse the date string and adjust for local timezone
  const d = new Date(dateString);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  
  // Extract year, month, and day
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  // Return the formatted date
  return `${year}-${month}-${day}`;
};

module.exports = formatDate;