import { Types } from 'mongoose';
import { User } from "../model";
import { OperationResult } from "../../../typings";
import { response } from "../../../data"


export function remove(ids: string[]): Promise<OperationResult> {
    return new Promise(function(resolve, reject) {
        const query = {
            _id: {
                $in: ids.map(_id => (new Types.ObjectId(_id)))
            }
        };
        User.remove(query).then(function () {
            resolve({status: 200, message: response.ACCOUNT_DELETED});
        }).catch(reject);
    });
}