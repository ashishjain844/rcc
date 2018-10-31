import { createTransport } from 'nodemailer';
import { config } from '../../environments'

interface MailOptions {
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

export function sendEmail(options: MailOptions) {
    console.log(process.env.SENDER_EMAIL, process.env.SENDER_PASSWORD);
    return new Promise(function(resolve, reject) {
        const transporter = createTransport({
            service: "gmail",
            auth: {
                user: config.SENDER_EMAIL,
                pass: config.SENDER_PASSWORD
            }
        });
        transporter.sendMail({
            from: 'RAP TEAM',
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html
        }, function(error, info) {
            if (error) return reject(error);
            
            resolve(info);
        });
    });
}

