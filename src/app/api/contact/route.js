import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { service, date, time, name, email, phone, notes } = body;

    const data = await resend.emails.send({
      from: "Scaleup Accounting <info@scaleupaccounting.uk>",
      to: ["info@scaleupaccounting.uk"],
      subject: `New Consultation Booking - ${service}`,
      reply_to: email,

      html: `
        <div style="font-family: Arial; padding: 20px; background:#f7f8fa;">
          
          <div style="max-width:600px;margin:auto;background:white;padding:20px;border-radius:10px;">
            
            <h2 style="color:#0A1A2F;">New Consultation Request</h2>

            <hr/>

            <p><b>Service:</b> ${service}</p>
            <p><b>Date:</b> ${date}</p>
            <p><b>Time:</b> ${time}</p>

            <hr/>

            <h3>Client Details</h3>

            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>

            <p><b>Notes:</b> ${notes || "-"}</p>

          </div>
        </div>
      `,
    });

    return Response.json({ success: true, data });

  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}