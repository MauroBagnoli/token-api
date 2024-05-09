import Joi from 'joi';

export const basicTokenCreateSchema = Joi.object({
    name: Joi.string().required(),
    ticker: Joi.string().required(),
    description: Joi.string().required()
});
