import { Schema, model, Model } from 'mongoose';
import { AdminDocument } from './document';
import { hashPassword } from '../../utils';
import { compare } from 'bcrypt';

const AdminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
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
    collection: 'admins'
});

AdminSchema.pre('save', function(next) {
    const user: any = this;
    hashPassword(user.password).then((hash) => {
        user.password = hash;
        next();
    }).catch(next);
});

AdminSchema.methods.verifyPassword = function(password: string): Promise<boolean> {
    return new Promise((resolve: (isMatch: boolean) => void, reject: (err: Error) => void) => {
        compare(password, this.password, function(err: Error, isMatch: boolean) {
            if (err) return reject(err);
            
            resolve(isMatch);
        });
    });
}


export const Admin: Model<AdminDocument​​> = model('admins', AdminSchema);
