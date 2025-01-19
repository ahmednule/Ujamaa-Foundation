import { sendContactMailConfirmation } from '../../../../service/emailservice'
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;
    
    if (!email || !firstName || !lastName || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;
    const subject = `New Contact Me Request from ${fullName}`;
    
    try {
      await sendContactMailConfirmation(
        fullName,
        email,
        phone,
        message,
        subject,
      );
    } catch (emailError) {
      console.error('Nodemailer error:', emailError);
      return NextResponse.json(
        { error: 'Email service error: ' + emailError.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Server error: ' + error.message },
      { status: 500 }
    );
  }
}
