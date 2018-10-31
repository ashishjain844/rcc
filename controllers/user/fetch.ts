import { Request, Response, NextFunction } from 'express';
import { user } from '../../db';
import { response } from '../../data';
import * as joi from 'joi';

const schema = joi.object({
    page: joi.number().greater(0),
    limit: joi.number().greater(0),
    sortKey: joi.string().valid("name", "dob", "updatedOn", "createdOn"),
    sortValue: joi.number().valid(-1, 1).when("sortKey", {is: joi.exist(),then: joi.required()}),
    search: joi.string(),
    statusCode: joi.array().items(joi.number().valid(0, 1, 2, 3, 4))
});


export function fetch(req: Request, res: Response, next: NextFunction) {
    const queries = {...req.query, statusCode: req.query.statusCode.split(',').map((code: string) => parseInt(code))};
    joi.validate(queries, schema).then(function(validatedValue) {
        const options = {
            ...validatedValue,
            page: validatedValue.page || 1,
            limit: validatedValue.limit || 10
        };
        user.fetch(options).then(function ({status, data}) {
            res.status(status).json({ data });
        }).catch(function(error) {
            console.log(error);
            res.status(500).json({message: response.INTERNAL_ERROR});
        });
    }).catch(function(error) {
        res.status(400).json({message: error.details[0].message.split('"').join("")});
    });
}