import { Schema, model, Model } from 'mongoose';
import { UserDocument } from './document';
import { hashPassword } from '../../utils';
import { compare } from 'bcrypt';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        text: true
    },
    username: {
        type: String,
        required: true,
        text: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    },
    statusCode: {
        type: Number,
        default: 0
    }
}, {
    collection: 'users'
});

UserSchema.pre('save', function(next) {
    const user: any = this;
    hashPassword(user.password).then((hash) => {
        user.password = hash;
        next();
    }).catch(next);
});

UserSchema.methods.verifyPassword = function(password: string): Promise<boolean> {
    return new Promise((resolve: (isMatch: boolean) => void, reject: (err: Error) => void) => {
        compare(password, this.password, function(err: Error, isMatch: boolean) {
            if (err) return reject(err);
            
            resolve(isMatch);
        });
    });
}


export const User: Model<UserDocument> = model('users', UserSchema);
