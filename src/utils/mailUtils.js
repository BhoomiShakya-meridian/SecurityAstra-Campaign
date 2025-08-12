//Load required modules

import { EmailClient } from "@azure/communication-email";
// Configure the Email Client with the connection string from environment variables
const connectionString = import.meta.env.VITE_MAIL_CNN_STRING;
const client = new EmailClient(connectionString);
 
export default async function sendMail(sender, recievers, subject, plainText, html) {
  const emailMessage = {
    senderAddress: sender || "DoNotReply@onmeridian.com",
    content: {
      subject: subject,
      plainText: plainText || "",
      html: html || "",
    },
    recipients: {
      to: recievers,
    },
  };
 
  try {
    const poller = await client.beginSend(emailMessage);
    const result = await poller.pollUntilDone();
    console.log("Email send result:", result);
    if (!result || result.status !== "Succeeded") {
      throw new Error("Email sending failed!");
    }
    return result; // Ensure result is returned
  } catch (error) {
    console.error("Error in sendMail:", error);
    throw error; // Ensure the error propagates to the calling function
  }
}
