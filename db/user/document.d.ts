import { Document } from "mongoose";

export interface UserDocument extends Document {
    verifyPassword(password: string): Promise<boolean>;
}