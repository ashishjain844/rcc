
export interface LoginData {
    username: string;
    password: string;
}
export interface OperationResult {
    message: string;
    status: number;
    data?: any;
}