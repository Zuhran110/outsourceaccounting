import { sendAutoMail } from "../config/mail.config.js";

// const Customer = {
//   fullname: "asdf",
//   comapany: "asdf",
//   turnover: "asdf",
//   email: "asdf",
// };

/* define function 
get data from the object
find if any data is missing from the object
console log the if data is present oor not 
if all the data is present then send the data to mail.config.js*/

const dataHandler = async (req, res) => {
  // 1. Get the object
  const value = req.body;

  // 2. CONVERT Object to Array of values to use .some()
  const isMissingValue = Object.values(value).some((val) => {
    // Safety check: ensure val is a string before trimming
    return typeof val === "string" ? val.trim() === "" : false;
  });

  if (isMissingValue) {
    console.log("There is a missing value");
    return res.status(400).json({ message: "All fields are required" });
  } else {
    console.log("Values are present");

    // FIX: 'Customer' was undefined. You likely meant to pass 'value' (the form data)
    await sendAutoMail(value);

    return res.status(200).json({ message: "Success" });
  }
};

export { dataHandler };
