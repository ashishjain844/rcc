"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resetTemplate(name, link) {
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
exports.resetTemplate = resetTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS91dGlscy9lbWFpbC9wYXNzd29yZC1yZXNldC50ZW1wbGF0ZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS91dGlscy9lbWFpbC9wYXNzd29yZC1yZXNldC50ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHVCQUE4QixJQUFZLEVBQUUsSUFBWTtJQUNwRCxPQUFPOzs7NEJBR2lCLElBQUk7Ozs7OytCQUtELElBQUk7Ozs7Ozs7Ozs7O0tBVzlCLENBQUM7QUFDTixDQUFDO0FBckJELHNDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFRlbXBsYXRlKG5hbWU6IHN0cmluZywgbGluazogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IHN0eWxlPVwibWluLWhlaWdodDogMTAwJTsgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtwYWRkaW5nOiAyMHB4IDEwcHg7XCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiAzMDBweDtwYWRkaW5nOiAxMHB4IDIwcHg7bWFyZ2luOiBhdXRvO2JhY2tncm91bmQtY29sb3I6ICNGRkZcIj5cbiAgICAgICAgICAgICAgICA8aDI+SGVsbG8gJHtuYW1lfSw8L2gyPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwiY29sb3I6ICM0NDRcIj5cbiAgICAgICAgICAgICAgICAgICAgWW91IHJlY2VudGx5IHJlcXVlc3RlZCB0byByZXNldCB5b3VyIHBhc3N3b3JkIGZvciB5b3VyIFJjYyBBZG1pbiBQYW5lbCBBY2NvdW50LiBQbGVhc2Ugb3BlbiB0aGUgYmVsb3cgbGluayB0byByZXNldCBpdC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7bGlua31cIj4gUmVzZXQgTGluayA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJjb2xvcjogIzQ0NFwiPlxuICAgICAgICAgICAgICAgICAgICBJZiB5b3UgZGlkIG5vdCByZXF1ZXN0IGEgcGFzc3dvcmQgcmVzZXQsIHBsZWFzZSBpZ25vcmUgdGhpcyBlbWFpbCBvciByZXBseSB0byBsZXQgdXMga25vdy4gVGhpcyBwYXNzd29yZCByZXNldCBsaW5rIGlzIG9ubHkgdmFsaWQgZm9yIG5leHQgMTUgbWludXRlcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVGhhbmtzPGJyLz5SY2MgQWRtaW4gUGFuZWwgVGVhbVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xufSJdfQ==