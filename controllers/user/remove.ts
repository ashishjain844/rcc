import { Request, Response, NextFunction } from "express";
import * as joi from 'joi';
import { user } from '../../db'
import { response } from '../../data/response';

const registerDataSchema = joi.array().items(joi.string().length(24)).required();


export function remove(req: Request, res: Response, next: NextFunction) {
    joi.validate(req.query.users.split(","), registerDataSchema).then(function(value) {
        user.remove(value).then(function(result) {
            res.status(result.status).send({message: result.message});
        }).catch(function(error) {
            res.status(500).send({message: response.INTERNAL_ERROR});
        });
    }).catch(function({details}) {
        return res.status(400).send({message: details[0].message.split('"').join('')});
    });
}