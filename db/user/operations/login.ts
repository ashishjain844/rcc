import { User } from '../model';
import { UserDocument } from '../document';
import { LoginData, OperationResult } from '../../../typings';
import { extractByStatus } from '../../../utils';
import { response } from '../../../data';

export function login(data: LoginData): Promise<OperationResult> {
    return new Promise(function(resolve, reject) {
        User.find({username: data.username}).then(function(result: UserDocument[]) {
            const users = extractByStatus(result);
            // Unverified User
            if (users.inActive.length > 0) {
                return resolve({status: 422, message: response.ACCOUNT_UNVERIFIED});
            }
            // Active User
            if (users.active.length > 0) {
                const user: UserDocument = users.active[0];
                user.verifyPassword(data.password).then(function (status: boolean) {
                    // password don't matched
                    if (!status) return resolve({status: 401, message: response.ACCOUNT_NOT_FOUND});
                    // User found
                    return resolve({status: 200, message: response.LOGIN_SUCCESS, data: user});

                }).catch(reject);
                return;
            }
            // Blocked User
            if (users.blocked.length > 0) {
                return resolve({status: 422, message: response.ACCOUNT_BLOCKED});
            }
            // Archived User
            if (users.archived.length > 0) {
                return resolve({status: 422, message: response.ACCOUNT_ARCHIVED});
            }
            // Deleted User
            if (users.deleted.length > 0) {
                return resolve({status: 422, message: response.ACCOUNT_DELETED});
            }

            return resolve({status: 401, message: response.ACCOUNT_NOT_FOUND});
        }).catch(reject);
    });
}

