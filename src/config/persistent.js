import { basename } from 'path';
import mongoose from './mongoose';
import redis from './redis';

const isCriticalProcess = basename(process.mainModule.filename) === 'index.js';
const DELAY_TIME = 60000; // time to wait before kill process

const disconnect = async () => {
    // disconnect database
    try {
        await mongoose.disconnect();
    } catch (error) {
        console.log(`mongoose disconnect: ${error}`);
    }
    try {
        await redis.disconnect();
    } catch (error) {
        console.log(`redis disconnect: ${error}`);
    }
    await new Promise((s) => setTimeout(s, 100));
};

let timeout;
const errorHandler = (err, isCriticalConnection = false) => {
    if (err) {
        if (isCriticalProcess && !isCriticalConnection) {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                process.kill(process.pid, 'SIGUSR1');
            }, DELAY_TIME);
            return null;
        }
        process.kill(process.pid, 'SIGUSR1');
    }
    return err;
};

const connect = async () => {
    try {
        // Exit application on error
        await mongoose.connect((err) => {
            console.error(`MongoDB connection error: ${err}`);
            errorHandler(err, true);
        });
    } catch (error) {
        if (errorHandler(error, true)) {
            throw error;
        }
    }

    try {
        await redis.connect((err) => {
            console.log(`Connection to Redis error: ${err}`);
            errorHandler(err);
        });
    } catch (error) {
        if (errorHandler(error)) {
            throw error;
        }
    }
};

module.exports = {
    connect,
    disconnect
};
