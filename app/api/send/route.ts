import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, service, zip, sqFootage, message } = body;

    await resend.emails.send({
      from: "Allureon Callista <info@allureoncallista.com>", // change once DNS verified
      to: "fmdiaz1802@gmail.com",
      subject: "Message from Allureon Callista Website / Mensaje del Sitio Web de Allureon Callista",
      react: EmailTemplate({
        name,
        email,
        phone,
        service,
        zip,
        sqFootage,
        message,
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
