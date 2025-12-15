//import
import nodemailer from "nodemailer";

//setup data

//create a test account and setup the fake account
const sendAutoMail = async (data) => {
  try {
    const testAccount = nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: (await testAccount).user,
        pass: (await testAccount).pass,
      },
    });

    //extract data
    // const data = req.body;

    //configure email

    const mailSetup = {
      from: '"My App" <system@example.com>',
      to: "admin@company.com",
      subject: "New Customer Registration",

      text: `
                New Customer Alert!
                
                Name: ${data.name}
                Company: ${data.company}
                Turnover: ${data.companyTurnover}
                Contact: ${data.email}
            `,
    };

    //send email
    const info = await transporter.sendMail(mailSetup);

    console.log("Message sent", info.messageId);

    console.log("preview mail", nodemailer.getTestMessageUrl(info));
  } catch {
    console.error("mail not sent");
  }
};

export { sendAutoMail };
