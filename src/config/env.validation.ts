import Joi from 'joi';

export const envValidationSchema = Joi.object({
  JWT_SECRET: Joi.string().required(),
  PORT: Joi.number().default(3000),
});
