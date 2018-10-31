import { Admin } from "../model";
import { OperationResult } from "../../../typings";
import { hashPassword } from "../../../utils";

export function resetPassword(username: string, password: string): Promise<OperationResult> {
    return new Promise(function(resolve, reject) {
        hashPassword(password).then(function(hashedPassword: string) {
            Admin.update({username, statusCode: 1}, {$set: {password: hashedPassword}}).then(function(result) {
                resolve({status: 200, message: 'Updated Successfully'});
            }).catch(reject);
        }).catch(reject);
    });
}