import Joi from 'joi';

module.exports = {
    /** GET /v1/articles */
    listValidation: {
        query: {
            skip: Joi.number()
                .min(0)
                .default(0),
            limit: Joi.number()
                .min(1)
                .max(1000)
                .default(10),
        }
    },

    /** POST /v1/articles */
    createValidation: {
        body: {
            /** article attributes */
            title: Joi.string()
                .max(100)
                .required(),
            content: Joi.string()
                .max(255)
                .allow(null, ''),
            categories: Joi.string(),
            images: Joi.array()
                .items(Joi.string()),
            price: Joi.number(),
        }
    },
};
