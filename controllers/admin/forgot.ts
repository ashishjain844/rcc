import { Request, Response, NextFunction } from "express";
import * as joi from 'joi';
import { admin } from '../../db';
import { response } from '../../data/response';

const schema = joi.object().keys({
    username: joi.string().required().email()
});

export function forgot(req: Request, res: Response, next: NextFunction) {
    joi.validate(req.body, schema).then((data) => {
        admin.forgot​​(data.username).then((result) => {
            res.status(result.status).json({message: result.message});
        }).catch(() => {
            res.status(500).send({message: response.INTERNAL_ERROR});
        });
    }).catch(({details}) => {
        res.status(400).json({message: details[0].message.split('"').join('')});
    });
}