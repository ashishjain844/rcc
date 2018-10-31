import { Request, Response, NextFunction } from "express";
import * as joi from 'joi';
import { verify } from 'jsonwebtoken';
import { config } from '../../environments';
import { admin } from '../../db';
import { response } from "../../data";

const tokenSchema = joi.object().keys({
    token: joi.string().required(),
    password: joi.string().required()
});

export function resetPassword(req: Request, res: Response, next: NextFunction) {
    const headerToken = req.headers['authorization'].split(" ")[1];
    joi.validate({token: headerToken, ...req.body}, tokenSchema).then(({token, password}) => {
        const {username, iat, exp}: any = verify(token, config.JWT_SECRET)
        if((exp - iat) > 60 * 60 * 1000) {
            return res.status(200).json({data: false, message: 'Token is Expired'});
        }
        admin.resetPassword(username, password).then(({status, message}) => {
            res.status(status).json({message});
        }).catch(() => {
            res.status(500).json({message: response.INTERNAL_ERROR});
        });
    }).catch(({name, details, message}) => {
        // Bad request ** token is required **
        if (!message) {
            message = details[0].message;
        }
        res.status(400).json({message: message.split('"').join('')});
    })
}