import { FormData } from "@/components/contact/contact-types";

const EmailTemplate = ({ name, email, message }: FormData) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
</head>

<body style="
  margin: 0;
  padding: 24px;
  background-color: #f8fafc;
  font-family: Arial, Helvetica, sans-serif;
  color: #0f172a;
">
  <div style="
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    overflow: hidden;
  ">

    <!-- Header -->
    <div style="
      padding: 24px;
      border-bottom: 1px solid #e2e8f0;
    ">
      <h1 style="
        margin: 0;
        font-size: 20px;
        line-height: 1.4;
        font-weight: 600;
      ">
        New contact message
      </h1>

      <p style="
        margin: 6px 0 0;
        font-size: 14px;
        line-height: 1.5;
        color: #64748b;
      ">
        Someone submitted the contact form on your website.
      </p>
    </div>

    <div style="padding: 24px;">

      <div style="margin-bottom: 20px;">
        <p style="
          margin: 0 0 6px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
        ">
          Name
        </p>

        <p style="
          margin: 0;
          font-size: 15px;
          line-height: 1.5;
        ">
          ${name}
        </p>
      </div>

      <div style="margin-bottom: 24px;">
        <p style="
          margin: 0 0 6px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
        ">
          Email
        </p>

        <p style="
          margin: 0;
          font-size: 15px;
          line-height: 1.5;
        ">
          <a
            href="mailto:${email}"
            style="
              color: #0f766e;
              text-decoration: none;
            "
          >
            ${email}
          </a>
        </p>
      </div>

      <div>
        <p style="
          margin: 0 0 8px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
        ">
          Message
        </p>

        <div style="
          padding: 16px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 15px;
          line-height: 1.7;
          white-space: pre-wrap;
        ">
          ${message}
        </div>
      </div>

    </div>

    <div style="
      padding: 16px 24px;
      border-top: 1px solid #e2e8f0;
      background-color: #f8fafc;
    ">
      <p style="
        margin: 0;
        font-size: 12px;
        line-height: 1.5;
        color: #94a3b8;
      ">
        Sent from
        <a
          href="https://ghimiresushank.com.np"
          style="
            color: #64748b;
            text-decoration: none;
          "
        >
          ghimiresushank.com.np
        </a>
      </p>
    </div>
  </div>
</body>
</html>
  `;
};

export { EmailTemplate };
