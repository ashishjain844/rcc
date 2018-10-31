import { Admin } from '../model';
import { AdminDocument } from '../document';
import { LoginData, OperationResult } from '../../../typings';
import { extractByStatus } from '../../../utils';
import { response } from '../../../data';

export function login(data: LoginData): Promise<OperationResult> {
    return new Promise(function(resolve, reject) {
        Admin.find({username: data.username}).then(function(result: AdminDocument[]) {
            const admins = extractByStatus(result);
            // Unverified Admin
            if (admins.inActive.length > 0) {
                return resolve({status: 422, message: response.ACCOUNT_UNVERIFIED});
            }
            // Active Admin
            if (admins.active.length > 0) {
                const admin: AdminDocument = admins.active[0];
                admin.verifyPassword(data.password).then(function (status: boolean) {
                    // password don't matched
                    if (!status) return resolve({status: 401, message: response.ACCOUNT_NOT_FOUND});
                    // admin found
                    return resolve({status: 200, message: response.LOGIN_SUCCESS, data: admins.active[0]});

                }).catch(reject);
                return;
            }
            // Blocked Admin
            if (admins.blocked.length > 0) {
                return resolve({status: 422, message: response.ACCOUNT_BLOCKED});
            }
            // Archived Admin
            if (admins.archived.length > 0) {
                return resolve({status: 422, message: response.ACCOUNT_ARCHIVED});
            }
            // Deleted Admin
            if (admins.deleted.length > 0) {
                return resolve({status: 422, message: response.ACCOUNT_DELETED});
            }

            return resolve({status: 401, message: response.ACCOUNT_NOT_FOUND});
        }).catch(reject);
    });
}

