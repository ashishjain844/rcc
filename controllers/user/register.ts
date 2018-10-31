import { Request, Response, NextFunction } from "express";
import * as joi from 'joi';
import { user } from '../../db'
import { response } from '../../data/response';

const registerDataSchema = joi.object().keys({
    name: joi.string().required(),
    username: joi.string().email().required(),
    password: joi.string().required(),
    dob: joi.date().required()
});


export function register(req: Request, res: Response, next: NextFunction) {
    const result = joi.validate(req.body, registerDataSchema);
    if (result.error) {
        return res.status(400).send({message: result.error.details[0].message.split('"').join('')});
    }
    user.register(result.value).then(function(result) {
        res.status(result.status).send({message: result.message});
    }).catch(function(error) {
        res.status(500).send({message: response.INTERNAL_ERROR});
    });
}