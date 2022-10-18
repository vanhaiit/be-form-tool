import express from 'express';

import middeware from '../../middlewares/upload-file.middleware';
import controller from '../../controllers/v1/upload.controller';

const router = express.Router();

router
    .route('/')
    .post(
        middeware,
        controller.create
    );

export default router;

