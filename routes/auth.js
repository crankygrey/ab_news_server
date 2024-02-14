import { Router } from 'express';
import { register } from '../controllers/auth.js';
import { body } from 'express-validator';
import validate from '../middleware/validate.js';

const router = Router();

router.post(
    '/register',
    body('username')
        .notEmpty()
        .withMessage('username is required')
        .trim()
        .isLength({ max: 20 })
        .withMessage('Must not exceed 20 characters'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Must be at least 8 chars long'),
    validate,
    register
);

export default router;
