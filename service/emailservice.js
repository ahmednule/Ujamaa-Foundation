import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

export async function sendContactMailConfirmation(name, email, phone, message) {
    try {
        const result = await transporter.sendMail({
            from: {
                name: 'Ujamaa Website',
                address: process.env.EMAIL_USER
            },
            to: process.env.EMAIL_USER,
            subject: `New Contact me Request from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
                        <h2 style="color: #1e293b; margin: 0; font-size: 24px;">New Contact Form Message</h2>
                    </div>
                    
                    <div style="margin-bottom: 24px;">
                        <div style="margin-bottom: 16px;">
                            <p style="color: #64748b; margin: 0 0 4px 0;">From:</p>
                            <p style="color: #1e293b; margin: 0; font-weight: 500;">${name}</p>
                        </div>
                        
                        <div style="margin-bottom: 16px;">
                            <p style="color: #64748b; margin: 0 0 4px 0;">Email:</p>
                            <p style="color: #1e293b; margin: 0; font-weight: 500;">${email}</p>
                        </div>
                        
                        ${phone ? `
                        <div style="margin-bottom: 16px;">
                            <p style="color: #64748b; margin: 0 0 4px 0;">Phone:</p>
                            <p style="color: #1e293b; margin: 0; font-weight: 500;">${phone}</p>
                        </div>
                        ` : ''}
                    </div>
                    
                    <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px;">
                        <p style="color: #64748b; margin: 0 0 8px 0;">Message:</p>
                        <p style="color: #1e293b; margin: 0; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `
        });
        
        console.log('Email sent:', result);
        return result;
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
}