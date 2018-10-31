import { genSalt, hash } from 'bcrypt';
const SALT_WORK_FACTOR = 10;

export function hashPassword(password: string): Promise<string> {
    return new Promise(function(resolve, reject) {
        genSalt(SALT_WORK_FACTOR, function(saltError, salt) {
            if (saltError) return reject(saltError);
        
            hash(password, salt, function(hashError, hash) {
                if(hashError) return reject(hashError);
        
                resolve(hash);
            });
        });
    });
}