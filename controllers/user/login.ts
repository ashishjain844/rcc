
import { Request, Response, NextFunction } from "express";
import { authenticate } from "passport";
import { OperationResult } from "../../typings";
import { sign } from "jsonwebtoken";
import { config } from "../../environments";
import { response } from "../../data";

export function login(req: Request, res: Response, next: NextFunction) {
    
    // authenticate with passport
    authenticate('user-local', {session: false}, function(error, result: OperationResult) {
        // auth error
        if (error) return res.status(500).json({ message: response.INTERNAL_ERROR });
        
        // user not accessible
        if (!result.data) return res.status(result.status).send({message: result.message});

        req.login(result.data, {session: false}, function(loginError) {
            // error in login to request
            if (loginError) return res.status(500).json({message: response.INTERNAL_ERROR});
            
            // success response
            const token = sign({id: result.data._id}, config.JWT_SECRET);
            return res.json({message: response.LOGIN_SUCCESS, token})
        });
    })(req, res, next);
}

