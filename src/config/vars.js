const path = require('path');

// import .env variables
require('dotenv-safe').load({
    path: path.join(__dirname, '../../.env'),
    sample: path.join(__dirname, '../../.env.development')
});

module.exports = {
    serviceName: 'form_tool_service',
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    dbConfig: {
        QUICK24: process.env.NODE_ENV === 'production' ? 'QUICK24' : 'QUICK24_BETA'
    },
    mongo: {
        uri: process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : process.env.MONGO_URI_TEST
    },
    redis: {
        uri: process.env.REDIS_URI
    },
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'development',
    otherServices: {
        manager: process.env.MANAGER_SERVICE_URL
    }
};
