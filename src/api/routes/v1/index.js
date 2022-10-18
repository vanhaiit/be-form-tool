/** @format */

import { Router } from 'express';
import uploadRoutes from './upload.router';

const router = Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

router.get('/version', (req, res) =>
    res.send(process.env.GIT_COMMIT_TAG || 'Not available')
);

/**
 * API v1/uploads
 */
router.use('/uploads', uploadRoutes);

export default router;
