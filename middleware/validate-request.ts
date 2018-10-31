import { Request, Response, NextFunction } from "express";
import { config } from "../environments";
import { response } from "../data";

export function validateRequest(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.header('x-access-token');
    const accessStatus = (typeof accessToken === 'string' && accessToken === config.SECRET_TOKEN) ||
        (typeof accessToken === 'object' && Array.isArray(accessToken) && (<string[]>accessToken).some(token => token === config.SECRET_TOKEN))
    if (!accessStatus) return res.status(401).json({message: response.INVALID_TOKEN});
    next();
}
