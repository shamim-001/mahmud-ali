import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, phone, email, preferredDate, preferredTime, problemType, additionalDetails } = body

    // Validate required fields
    if (!fullName || !phone) {
      return NextResponse.json({ error: "Full name and phone are required" }, { status: 400 })
    }

    // Format the email content
    const emailHtml = `
      <h2>New Booking Request</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
      ${preferredDate ? `<p><strong>Preferred Date:</strong> ${preferredDate}</p>` : ""}
      ${preferredTime ? `<p><strong>Preferred Time:</strong> ${preferredTime}</p>` : ""}
      ${problemType ? `<p><strong>Problem Type:</strong> ${problemType}</p>` : ""}
      ${additionalDetails ? `<p><strong>Additional Details:</strong> ${additionalDetails}</p>` : ""}
    `

    // Send email using Resend
    const data = await resend.emails.send({
      from: "CSPP Booking <onboarding@resend.dev>",
      to: ["csppphysiotherapy@gmail.com"],
      subject: `New Booking Request from ${fullName}`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send booking request" }, { status: 500 })
  }
}
