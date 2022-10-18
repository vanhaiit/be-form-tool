const mongoose = require('mongoose');
const { mongo, env } = require('./vars');
const bluebird = require('bluebird');

// set mongoose Promise to Bluebird
mongoose.Promise = bluebird;

// print mongoose logs in dev env
if (env === 'development') {
    mongoose.set('debug', true);
}

const defaultErrorHandler = (err) => {
    console.log(`Connection to Mongo error: ${err}`);
};

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
const connect = (errorHandler = defaultErrorHandler) => {
    mongoose.connection.on('error', errorHandler);

    /** connect database */
    mongoose.connect(mongo.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: 1,
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    return mongoose.connection;
};

const disconnect = mongoose.disconnect.bind(mongoose);

module.exports = { connect, disconnect };
