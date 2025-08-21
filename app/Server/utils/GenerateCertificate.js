

  export const generateVerificationId = (studentId, dob, name) => {
  const dateObj = new Date(dob);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = String(dateObj.getFullYear()).slice(-2); 

  const namePart = name.slice(0, 3).toUpperCase();

  
  return `brav-${studentId}-${day}-${month}-${year}-${namePart}`;
  }
