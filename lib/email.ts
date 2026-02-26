
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);

interface sendEmailProps {
  to: string;
  subject: string;
  text: string;
};

export default async function sendEmail({
  to,
  subject,
  text,
}: sendEmailProps) {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: to,
    subject: subject,
    html: `<p>${text}</p>`,
  });

  console.log("Resend response:", { data, error });

  if (error) {
    throw new Error(error.message);
  }
};
