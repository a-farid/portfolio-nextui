"use server";

import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");
  const subject = formData.get("subject");

  // simple server-side validation
  if (!validateString(email, 500)) return { error: "Invalid sender email" };
  if (!validateString(message, 5000)) return { error: "Invalid message" };
  if (!validateString(subject, 5000)) return { error: "Invalid subject" };

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "fahizoune10@gmail.com",
      subject: "Message from contact form",
      reply_to: email,
      text: "Thnak you for your submission. We will get back to you as soon as possible.",
      react: EmailTemplate({ subject: subject, message: message }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
