import { Request, Response, NextFunction } from "express";
import * as joi from 'joi';
import { user } from '../../db'
import { response } from '../../data/response';

const registerDataSchema = joi.object().keys({
    ids: joi.array().items(joi.string()).required(),
    update: joi.object().keys({
        name: joi.string(),
        dob: joi.date(),
        statusCode: joi.number().valid(0, 1, 2, 3, 4)
    })
});


export function update(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    joi.validate(req.body, registerDataSchema).then(function(value) {
        user.update(value).then(function(result) {
            res.status(result.status).send({message: result.message});
        }).catch(function(error) {
            res.status(500).send({message: response.INTERNAL_ERROR});
        });
    }).catch(function({details}) {
        return res.status(400).send({message: details[0].message.split('"').join('')});
    });
}