import { User } from "../model";
import { OperationResult } from "../../../typings";
import { UserDocument } from "../document";



export function fetch(options: any): Promise<OperationResult> {
    return new Promise(function(resolve, reject) {
        const query: any = {
            '$and': [
                {
                    statusCode: {
                        $in: options.statusCode
                    }
                }
            ]
        }, sort = {};
        if (options.search) {
            query['$and'].push({
                '$or': [
                    {
                        name: {
                            $regex: new RegExp(options.search, 'gi')
                        }
                    },
                    {
                        username: {
                            $regex: new RegExp(options.search, 'gi')
                        }
                    }
                ]
            });
        }
        if (options.sortKey) {
            sort[options.sortKey] = options.sortValue;
        }
        console.log(query);
        User.countDocuments(query).then(function (count) {
            User.find(query, {
                password: false
            }, {
                limit: options.limit,
                skip: (options.page - 1) * options.limit,
                sort
            }).then(function(users: UserDocument[]) {
                resolve({status: 200, message: "", data: {count, users}});
            }).catch(reject);
        }).catch(reject);
    });
}