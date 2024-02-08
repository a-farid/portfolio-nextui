import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, subject, message } = req.body;
  const { data, error } = await resend.emails.send({
    from: fromEmail || "fahizoune10@gmail.com",
    to: ["fahizoune10@gmail.com", email],
    subject: subject || "Hello",
    react: EmailTemplate({ subject: subject, message: message }),
    text: req.body.message,
  });

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}
