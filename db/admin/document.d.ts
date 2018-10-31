import { Document } from "mongoose";

export interface AdminDocument extends Document {
    verifyPassword(password: string): Promise<boolean>;
}