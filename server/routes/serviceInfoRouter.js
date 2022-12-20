import {Router} from "express";
import serviceInfoController from "../controllers/ServiceInfoController.js";
const router = new Router()
const ServiceInfoController = new serviceInfoController()

router.post('/create', ServiceInfoController.Create)
router.post('/update/:titleOld/:id', ServiceInfoController.update)
router.get('/getAll', ServiceInfoController.getAll)
router.get('/getOne/:serviceId', ServiceInfoController.getOne)

export default router