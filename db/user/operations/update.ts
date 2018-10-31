import { Types } from 'mongoose';
import { User } from "../model";
import { OperationResult } from "../../../typings";
import { response } from "../../../data"


export function update(options: any): Promise<OperationResult> {
    return new Promise(function(resolve, reject) {
        const query = {
            _id: {
                $in: options.ids.map((_id: string) => (new Types.ObjectId(_id)))
            }
        };
        console.log(options.ids, query);
        User.updateMany(query, {$set: {...options.update, updatedOn: Date.now()}}).then(function (result) {
            console.log(result);
            resolve({status: 200, message: response.ACCOUNT_UPDATED});
        }).catch(reject);
    });
}