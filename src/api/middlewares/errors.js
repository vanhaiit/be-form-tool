const httpStatus = require('http-status');
const expressValidation = require('express-validation');
const APIException = require('../../common/utils/APIException');

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
const handler = (ex, req, res, next) => {
    const { status = 500 } = ex;

    const response = {
        code: status,
        message: ex.message || httpStatus[status],
        errors: ex.errors
    };
    if (ex.stack && process.env.NODE_ENV !== 'development') response.stack = ex.stack;

    /* Step:: translate message */
    response.message = !ex.isTranslated
        ? res.__(response.message)
        : response.message;

    // res.status(status);
    res.json(response);
    res.end();
};
exports.handler = handler;

/**
 * If error is not an instanceOf ApiResult, convert it.
 * @public
 */
exports.converter = (err, req, res, next) => {
    let convertedError = err;
    if (err instanceof expressValidation.ValidationError) {
        convertedError = new APIException({
            message: res.__('VALIDATION_ERROR'),
            errors: err.errors,
            status: err.status,
            stack: err.stack,
            isTranslated: true
        });
    } else if (!(err instanceof APIException)) {
        convertedError = new APIException({
            message: res.__(err.message),
            status: err.status,
            stack: err.stack,
            isTranslated: true
        });
    }

    return handler(convertedError, req, res);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
exports.notFound = (req, res, next) => {
    const err = new APIException({
        message: res.__('NOT_FOUND!'),
        status: httpStatus.NOT_FOUND,
        isTranslated: true
    });
    return handler(err, req, res);
};
