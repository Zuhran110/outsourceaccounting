import { sendAutoMail } from "../services/Email.services.js";

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
  const value = req.body; //{"name": "name"}
  // console.log("value is", value);
  // console.log("array of value's", Object.values(value)); //[name]
  // 2. CONVERT Object to Array Object.values(value) of values
  // to use .some() check's if any one value passes the checks returns true or false
  // const isMissingValue =
  //   Object.values(value) >= 0 ||
  //   Object.values(value).some((val) => {
  //     // Object.values({}) = false
  //     // Object.values({a: 1, b: 2}) = false
  //     // Safety check: ensure val is a string before trimming
  //     console.log("value is", value);
  //     console.log("array of value's", Object.values(value));
  //     if (typeof val === "string") {
  //       //val is string then else false
  //       console.log("val !== 'string'", val !== "string");
  //       if (val.trim() === "") {
  //         //val is emty after trim return true else false
  //         console.log("val.trim() === ''", val.trim() === "");
  //         return true;
  //       } else {
  //         console.log("val is not a empty after type check");
  //         return false;
  //       }
  //     } else {
  //       console.log("val !== 'string'", val !== "string");
  //       return false;
  //     }

  //     // return typeof val !== "string" ? val.trim() === "" : false;
  //   });

  const { name, company, companyTurnover, email } = value;
  const isValid =
    typeof name === "string" &&
    name.trim() !== "" &&
    typeof company === "string" &&
    company.trim() !== "" &&
    typeof companyTurnover === "string" &&
    companyTurnover.trim() !== "" &&
    typeof email === "string" &&
    email.trim() !== "";

  console.log("Is data valid?", isValid);

  if (!isValid) {
    console.log("Missing or invalid data. Mail NOT sent.");
    return res.status(400).json({ error: "All fields are required" });
  }

  // console.log("missing value is ", isMissingValue);
  // if (isMissingValue) {
  //   console.log("There is a missing value");
  //   return res.status(400).json({ message: "All fields are required" });
  // } else {
  //   console.log("Values are present");

  // FIX: 'Customer' was undefined. You likely meant to pass 'value' (the form data)
  console.log("✅ All data present. Sending mail...");
  await sendAutoMail(value);

  return res.status(200).json({ message: "Success" });
  // }
};

export { dataHandler };
