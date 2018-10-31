/*
* Extract Users with the help of status codes
*/


export function extractByStatus(users: any[]) {
    return {
        inActive: users.filter(user => user && (user.statusCode === 0)),
        active: users.filter(user => user && (user.statusCode === 1)),
        blocked: users.filter(user => user && (user.statusCode === 2)),
        archived: users.filter(user => user && (user.statusCode === 3)),
        deleted: users.filter(user => user && (user.statusCode === 4)),
    };
}

