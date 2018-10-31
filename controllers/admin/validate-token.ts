import { Request, Response, NextFunction } from "express";
import * as joi from 'joi';
import { verify } from 'jsonwebtoken';
import { config } from '../../environments';
import { admin } from '../../db';
import { response } from "../../data";

const schema = joi.object().keys({
    token: joi.string().required()
});

export function validateToken(req: Request, res: Response, next: NextFunction) {
    const headerToken = req.headers['authorization'].split(" ")[1];
    joi.validate( {token: headerToken}, schema).then(({token}) => {
        const decodedData: any = verify(token, config.JWT_SECRET)
        console.log(decodedData.then);
        if((decodedData.exp - decodedData.iat) > 60 * 60 * 1000) {
            return res.status(200).json({data: false, message: 'Token is Expired'});
        }
        admin.checkPresent({username: decodedData.username, statusCode: 1}).then((status) => {
            res.status(200).json({data: status, message: ''});
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