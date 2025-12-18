import { sendAutoMailTwo } from "../services/emailTwo.services.js";

const contacttwo = async (req, res) => {
  const val = req.body;

  const { fullname, companyName, email, serviceType, message } = val;

  const isValid =
    typeof val.fullname === "string" &&
    fullname.trim() !== "" &&
    typeof val.companyName === "string" &&
    companyName.trim() !== "" &&
    typeof val.email === "string" &&
    email.trim() !== "" &&
    typeof val.serviceType === "string" &&
    serviceType.trim() !== "" &&
    typeof val.message == "string" &&
    message.trim() !== "";

  if (!isValid) {
    return res.status(400).json({ error: "All Fields are required" });
  }

  await sendAutoMailTwo(val);

  res.status(200).json({ message: "Mail sent" });
};

export { contacttwo };
