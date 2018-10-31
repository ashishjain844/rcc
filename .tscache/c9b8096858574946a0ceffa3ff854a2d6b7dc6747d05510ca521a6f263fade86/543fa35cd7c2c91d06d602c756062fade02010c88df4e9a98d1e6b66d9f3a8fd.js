"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function verificationTemplate(name, link) {
    return `
        <div style="min-height: 100%; background-color: #EEE;padding: 20px 10px;">
            <div style="max-width: 300px;padding: 10px 20px;margin: auto;background-color: #FFF">
                <h2>Welcome ${name},</h2>
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
exports.verificationTemplate = verificationTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS91dGlscy9lbWFpbC9hY2NvdW50LXZlcmlmaWNhdGlvbi50ZW1wbGF0ZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS91dGlscy9lbWFpbC9hY2NvdW50LXZlcmlmaWNhdGlvbi50ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhCQUFxQyxJQUFZLEVBQUUsSUFBWTtJQUMzRCxPQUFPOzs7OEJBR21CLElBQUk7Ozs7OytCQUtILElBQUk7Ozs7Ozs7Ozs7O0tBVzlCLENBQUM7QUFDTixDQUFDO0FBckJELG9EQXFCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZmljYXRpb25UZW1wbGF0ZShuYW1lOiBzdHJpbmcsIGxpbms6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGRpdiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQtY29sb3I6ICNFRUU7cGFkZGluZzogMjBweCAxMHB4O1wiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDogMzAwcHg7cGFkZGluZzogMTBweCAyMHB4O21hcmdpbjogYXV0bztiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGXCI+XG4gICAgICAgICAgICAgICAgPGgyPldlbGNvbWUgJHtuYW1lfSw8L2gyPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwiY29sb3I6ICM0NDRcIj5cbiAgICAgICAgICAgICAgICAgICAgWW91IHJlY2VudGx5IHJlcXVlc3RlZCB0byByZXNldCB5b3VyIHBhc3N3b3JkIGZvciB5b3VyIFJjYyBBZG1pbiBQYW5lbCBBY2NvdW50LiBQbGVhc2Ugb3BlbiB0aGUgYmVsb3cgbGluayB0byByZXNldCBpdC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7bGlua31cIj4gUmVzZXQgTGluayA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJjb2xvcjogIzQ0NFwiPlxuICAgICAgICAgICAgICAgICAgICBJZiB5b3UgZGlkIG5vdCByZXF1ZXN0IGEgcGFzc3dvcmQgcmVzZXQsIHBsZWFzZSBpZ25vcmUgdGhpcyBlbWFpbCBvciByZXBseSB0byBsZXQgdXMga25vdy4gVGhpcyBwYXNzd29yZCByZXNldCBsaW5rIGlzIG9ubHkgdmFsaWQgZm9yIG5leHQgMTUgbWludXRlcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVGhhbmtzPGJyLz5SY2MgQWRtaW4gUGFuZWwgVGVhbVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xufSJdfQ==