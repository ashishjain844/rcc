import { Admin } from '../model';
import { AdminDocument } from '../document';
import { response } from '../../../data/response';
import { OperationResult } from '../../../typings';

export function register(data: any): Promise<OperationResult> {

    return new Promise(function(resolve, reject) {
        Admin.find({
            username: data.username
        }, {_id: true, statusCode: true}).then(function(result: AdminDocument[]) {
            
            // unverified user
            if (result.some(admin => admin['statusCode'] === 0)) {
                return resolve({status: 422, message: response.ACCOUNT_UNVERIFIED});
            }

            // active user
            if (result.some(admin => admin['statusCode'] === 1)) {
                return resolve({status: 422, message: response.REGISTER_PRESENT});
            }

            // blocked user
            if (result.some(admin => admin['statusCode'] === 2)) {
                return resolve({status: 422, message: response.ACCOUNT_BLOCKED});
            }

            // archived user
            if (result.some(admin => admin['statusCode'] === 3)) {
                return resolve({status: 422, message: response.ACCOUNT_ARCHIVED});
            }
            
            const admin = new Admin(data);
            admin.save().then(function() {
                resolve({status: 200, message: response.REGISTER_SUCCESS});
            }).catch(reject);

        }).catch(reject);
    });
}

