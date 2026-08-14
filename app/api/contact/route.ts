import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/templates/contact";

function getResend() {
  const key = process.env.RESEND_API_KEY!;
  if (!key) {
    throw new Error("RESEND_API_KEY is missing");
  }
  return new Resend(key);
}

export async function POST(req: NextRequest) {
  const resend = getResend();
  const mail = process.env.FORM_SEND_EMAIL;
  try {
    const body = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 },
      );
    }

    if (!email) {
      throw new Error("Email is required to send mail");
    }

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact Form <${mail}>`,
      to: ["ghimiresushank64@gmail.com"],
      subject: "Contact Form Submission",
      html: EmailTemplate({ name, email, message }),
    });

    if (!data?.id || error) {
      return NextResponse.json(
        {
          message: "Failed to send message to the user",
          success: false,
          error: error?.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message submitted successfully.",
    });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: err.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form.",
      },
      { status: 500 },
    );
  }
}
