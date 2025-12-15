// test-email.js
import nodemailer from "nodemailer";

// Mock data to simulate what your database would provide
const customerData = {
  fullName: "John Doe",
  companyName: "Tech Solutions Ltd",
  companyTurnover: "$500,000",
  email: "john@techsolutions.com",
};

const sendAutoMail = async () => {
  console.log("1. Starting email process...");

  try {
    // Create a temporary fake account
    let testAccount = await nodemailer.createTestAccount();
    console.log("2. Test account created: " + testAccount.user);

    // Setup the transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Define the email content
    const mailOptions = {
      from: '"Test Sender" <sender@example.com>',
      to: "admin@company.com",
      subject: "Test: New Customer",
      text: `
                New Customer Alert!
                Name: ${customerData.fullName}
                Company: ${customerData.companyName}
            `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("3. Message sent successfully!");
    console.log("--------------------------------------------------");
    console.log("CLICK THIS LINK TO VIEW THE EMAIL:");
    console.log(nodemailer.getTestMessageUrl(info)); // <--- THIS IS THE KEY LINE
    console.log("--------------------------------------------------");
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
};

sendAutoMail();
