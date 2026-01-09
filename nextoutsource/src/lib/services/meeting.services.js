import { mailtransporter } from "../config/mail.config";
import { parse } from "date-fns";
import { UTCDate } from "@date-fns/utc";

const meetingService = async ({ date, time, Name, email }) => {
  try {
    const transporter = await mailtransporter();

    const parsedDate = parse(date, "PPP", new Date(0));

    parsedDate.setHours(parseInt(time), 0, 0, 0);

    const DateUTC = new UTCDate(parsedDate);

    const pakistanOffset = 5 * 60;
    const DatePakistan = new Date(
      DateUTC.getTime() + pakistanOffset * 60 * 1000
    );

    console.log("Original date/time from frontend:", date, time);
    console.log("Parsed local date:", parsedDate);
    console.log("UTC time:", DateUTC);
    console.log("Pakistan time (UTC+5):", DatePakistan);

    const mailSetup = {
      from: '"My App" <system@example.com>',
      to: "zuhranyousaf12345@gmail.com",
      subject: "New Meeting Scheduled",
      text: `New Meeting Scheduled! Name: ${Name}, Date: ${date}, Time: ${time}`, // Fallback for non-HTML email clients
      html: `
    <table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; font-family: Arial, sans-serif;">
        <tr>
            <td style="background-color: #f4f4f4; padding: 20px; text-align: center;">
                <h1 style="color: #333333; font-size: 24px;">🎉 New Meeting Alert!</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 30px; background-color: #ffffff; border: 1px solid #dddddd;">
                <p style="font-size: 16px; color: #555555; margin-bottom: 15px;">
                    A new meeting has been scheduled with the following details:
                </p>
                <ul style="list-style: none; padding: 0;">
                    
                    <li style="margin-bottom: 10px;">
                        <strong>Name:</strong> 
                        <span style="color: #007bff;">${Name}</span>
                    </li>

                    <li style="margin-bottom: 10px;">
                        <strong>Email:</strong> 
                       ${email}
                    </li>

                    <li style="margin-bottom: 10px;">
                        <strong>Date:</strong> ${date}
                    </li>

                    <li style="margin-bottom: 10px;">
                        <strong>Time:</strong> ${time}
                    </li>

                    <li style="margin-bottom: 10px;">
                        <strong>Date (UTC):</strong> 
                        <span>${DateUTC.toISOString()}</span>
                    </li>

                    <li style="margin-bottom: 10px;">
                        <strong>Date (PKT):</strong> 
                        <span>${DatePakistan.toLocaleString("en-PK", {
                          timeZone: "Asia/Karachi",
                        })}</span>
                    </li>

                </ul>
            </td>
        </tr>
    </table>
  `,
    };

    const sendMail = await transporter.sendMail(mailSetup);

    console.log("Meeting service mail sent", sendMail.messageId);

    return {
      success: true,
      messageId: sendMail.messageId,
    };
  } catch (error) {
    console.error("Meeting service mail not sent", error);
    throw error;
  }
};

export default meetingService;
