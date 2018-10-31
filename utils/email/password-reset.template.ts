


export function resetTemplate(name: string, link: string): string {
    return `
        <div style="min-height: 100%; background-color: #EEE;padding: 20px 10px;">
            <div style="max-width: 300px;padding: 10px 20px;margin: auto;background-color: #FFF">
                <h2>Hello ${name},</h2>
                <p style="color: #444">
                    You recently requested to reset your password for your Rcc Admin Panel Account. Please open the below link to reset it.
                </p>
                <div style="text-align: center;">
                    <a href="${link}"> Reset Link </a>
                </div>
                <p style="color: #444">
                    If you did not request a password reset, please ignore this email or reply to let us know. This password reset link is only valid for next 15 minutes.
                </p>
                <br/>
                <p>
                    Thanks<br/>Rcc Admin Panel Team
                </p>
            </div>
        </div>
    `;
}