// pages/api/email.ts

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import validator from "validator";

export async function POST(req: NextApiRequest) {
  let {
    name,
    email,
    message,
  }: { name: string; email: string; message: string } = req.body;

  // Sanitize input
  // name = validator.escape(name);
  // email = validator.escape(email);
  // message = validator.escape(message);

  // Validate input
  if (!validator.isEmail(email)) {
    res.status(400).send("Invalid email address");
    return;
  }
  if (validator.isEmpty(message)) {
    res.status(400).send("Message cannot be empty");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_USER,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "moin@melvinrinkleff.de",
      subject: `New message from ${name}`,
      text: message,
      replyTo: email,
    });

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
