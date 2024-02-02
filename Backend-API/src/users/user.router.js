import { Router } from "express";
import * as UserController from './user.controller.js'



const router = Router()

router.post('/add', UserController.addDetail)
router.put('/update', UserController.updateDetail)
router.get('/count', UserController.getCount)
router.get('/detail', UserController.getDetails)





export default router;