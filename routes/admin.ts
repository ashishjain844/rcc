import { Router } from 'express';
import { admin } from "../controllers";
import { validateRequest } from '../middleware';

const router: Router = Router();

// Register
router.post("/", validateRequest, admin.register);

// Login
router.post('/login', validateRequest, admin.login);

// Forgot password
router.post('/forgot', validateRequest, admin.forgot);

// Reset password
router.post('/reset', validateRequest, admin.resetPassword);

// Validate reset password token
router.get('/validate', validateRequest, admin.validateToken);

export default router;