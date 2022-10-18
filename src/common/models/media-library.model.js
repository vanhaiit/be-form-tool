import mongoose, { mongo } from 'mongoose';
import moment from 'moment-timezone';
import httpStatus from 'http-status';
import { isEqual, includes, pick } from 'lodash';

import messages from '../../config/messages';
import APIException from '../utils/APIException';
import { serviceName } from '../../config/vars';
import eventBus from '../services/event-bus';

/**
 * Product Schema
 * @public
 */
const mediaLibrarySchema = new mongoose.Schema(
    {
        /** product attributes */
        _id: {
            type: String,
            lowercase: true,
            trim: true
        },
        fileName: {
            type: String,
            maxlength: 1000,
            required: true
        },
        fileType: {
            type: String,
            default: ''
        },
        fileSize: {
            type: Number,
            maxlength: 1000,
            default: ''
        },
        dimensions: {
            type: String,
            maxlength: 255,
            default: ''
        },
        alternativeText: {
            type: String,
            maxlength: 255,
            default: ''
        },
        title: {
            type: String,
            maxlength: 255,
            default: ''
        },
        caption: {
            type: String,
            maxlength: 255,
            default: ''
        },
        description: {
            type: String,
            maxlength: 255,
            default: ''
        },
        link: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: true
        },
        createdBy: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            avatar: {
                type: String,
                default: null
            },
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

/**
 * Register event emiter
 */
const EVENT_SOURCE = `${serviceName}.media-library`;
const Events = {
    MEDIALIBRARY_CREATED: `${serviceName}.media-library.created`,
    MEDIALIBRARY_UPDATED: `${serviceName}.media-library.updated`,
    MEDIALIBRARY_DELETED: `${serviceName}.media-library.deleted`
};

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
mediaLibrarySchema.pre('save', async function save(next) {
    try {
        /** before inster to collection */
        this._id = new mongo.ObjectId().toHexString();
        this.wasNew = this.isNew;
        return next();
    } catch (error) {
        return next(error);
    }
});

mediaLibrarySchema.post('save', async function afterSave(model, next) {
    /** after inster to collection */
    if (this.wasNew) {
        eventBus.emit(Events.MEDIALIBRARY_CREATED, model);
    } else {
        eventBus.emit(Events.MEDIALIBRARY_UPDATED, model);
    }
    next();
});

mediaLibrarySchema.post('remove', function afterRemove() {
    /** after remove to collection */
    eventBus.emit(Events.MEDIALIBRARY_DELETED, this);
});

/**
 * Methods
 */
mediaLibrarySchema.method({
    /**
     * Transform mongoose model to expose object
     */
    transform() {
        const transformed = {};
        const fields = [
            'fileName',
            'fileType',

            'fileSize',
            'dimensions',
            'alternativeText',
            'title',

            'caption',
            'description',
            'link',

            'isActive',
            'createdBy',
            'updatedAt'
        ];

        fields.forEach((field) => {
            transformed[field] = this[field];
        });

        transformed.createdAt = moment(this.createdAt).unix();
        transformed.updatedAt = moment(this.updatedAt).unix();
        return transformed;
    },

    /**
     * Update and return new model
     *
     * @param {Object} model
     * @returns {Promise<Product>, APIException>}
     */
    async updateModel(model) {
        try {
            const oldModel = this;

            /* setup param changed */
            const dataChanged = mongoose.model('Product').getChangedProperties({
                newModel: model,
                oldModel
            });

            const params = pick(model, dataChanged);
            params.updatedAt = new Date();

            if (params.attributes && oldModel.attributes) {
                params.attributes = Object.assign(oldModel.attributes, params.attributes);
            }

            /* update new data */
            const product = await mongoose.model('Product').findOneAndUpdate({ _id: this._id }, params, { new: true });
            return product;
        } catch (ex) {
            throw (ex);
        }
    },
});

/**
 * Statics
 */
mediaLibrarySchema.static({
    /** event emiter */
    Events,
    EVENT_SOURCE,

    /**
     * Get all changed properties
     *
     * @public
     * @param {Object} data newModel || oleModel
     */
    getChangedProperties({ newModel, oldModel }) {
        const changedProperties = [];
        const allChangableProperties = [
            /** product attributes */
            'name',
            'images',
            'content',
        ];

        /** get all changable properties */
        allChangableProperties.forEach((field) => {
            if (includes(allChangableProperties, field)) {
                changedProperties.push(field);
            }
        });

        /** get data changed */
        const dataChanged = [];
        changedProperties.forEach(field => {
            if (!isEqual(newModel[field], oldModel[field])) {
                dataChanged.push(field);
            }
        });

        return dataChanged;
    },

    /**
     * Generate Product Id Auto Increment
     */
    async generateProductId() {
        let lastProduct = this.findOne().sort({ createdAt: -1 });
        if (!lastProduct) return 1000;

        /** set product id auto increment */
        lastProduct = lastProduct.transform();
        const count = parseInt(lastProduct.id, 2);
        return (count + 1).toString();
    },

    /**
     * Get Product By Id
     *
     * @public
     * @param {String} productId
     * @param {String} userId
     */
    async getProductById(productId, userId) {
        try {
            const product = await this.findOne({
                _id: productId,
                'createdBy.id': userId || { $exists: true }
            }).exec();
            if (!product) throw new APIException({ status: httpStatus.NOT_FOUND, message: messages.NOT_FOUND });
            return product;
        } catch (ex) {
            throw (ex);
        }
    },
});

/**
 * @typedef Product
 */
module.exports = mongoose.model('MediaLibrary', mediaLibrarySchema, 'dbo.MediaLibrary');
