import * as express from 'express';
import { Router, Request, Response, NextFunction } from 'express';

const router: Router = express.Router();

router.get("/", function(req: Request, res: Response, next: NextFunction){
	res.render("index");
});

import user from './user';
router.use("/user", user);

import admin from './admin';
router.use("/admin", admin);

export default router;