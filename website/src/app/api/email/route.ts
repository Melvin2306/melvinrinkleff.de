import nodemailer from "nodemailer";
import validator from "validator";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // let {
  //   name,
  //   email,
  //   message,
  // }: { name: string; email: string; message: string } = req.body;
  // console.log(req.body);
  // //Sanitize input
  // name = validator.escape(name);
  // email = validator.escape(email);
  // message = validator.escape(message);
  // // Validate input
  // if (validator.isEmpty(email)) {
  //   res.status(400).send("Email cannot be empty");
  //   return;
  // }
  // if (validator.isEmpty(message)) {
  //   res.status(400).send("Message cannot be empty");
  //   return;
  // }
  // if (!validator.isEmail(email)) {
  //   res.status(400).send("Invalid email address");
  //   return;
  // }
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMPT_HOST,
  //   port: process.env.SMPT_PORT,
  //   auth: {
  //     user: process.env.SMPT_USER,
  //     pass: process.env.SMPT_PASSWORD,
  //   },
  // });
  // try {
  //   await transporter.sendMail({
  //     from: "moin@melvinrinkleff.de",
  //     to: "moin@melvinrinkleff.de",
  //     subject: `New message from ${name} (${email}))`,
  //     text: message,
  //     replyTo: email,
  //   });
  //   res.status(200).send("Email sent successfully");
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send(error);
  // }
}
