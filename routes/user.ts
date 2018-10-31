import { Router } from 'express';
import { user } from "../controllers";
import { validateRequest } from '../middleware';

const router: Router = Router();

router.route("/")
	.get(validateRequest, user.fetch)
	.post(validateRequest, user.register)
	.patch(validateRequest, user.update)
	.delete(validateRequest, user.remove);

router.post('/login', validateRequest, user.login);

// router.post('/forgot', authenticate('admin-local'));

export default router;