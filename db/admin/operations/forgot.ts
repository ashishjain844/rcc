import { sign } from 'jsonwebtoken';
import { Admin } from "../model";
import { config } from '../../../environments';
import { OperationResult } from '../../../typings';
import { response } from "../../../data";
import { sendEmail, resetTemplate } from '../../../utils';

export function forgot​​(username: string): Promise<OperationResult> {
    return new Promise(function(resolve, reject) {
        Admin.countDocuments({username, statusCode: 1}).then(function(count) {
            if (count > 0) {
                const token = sign({username}, config.JWT_SECRET, {
                    expiresIn: 60 * 60
                });
                const resetLink = `${config.CLIENT_SIDE_URI}/reset-password/${token}`;
                const template = resetTemplate('User', resetLink);
                sendEmail({to: username, subject: 'Reset Password', text: resetLink, html: template}).then((info) => {
                    resolve({status: 200, message: response.FORGOT_MAIL_SENT})
                }).catch(reject);
            } else {
                resolve({status: 422, message: response.ACCOUNT_NOT_FOUND});
            }
        }).catch(reject);
    });
}