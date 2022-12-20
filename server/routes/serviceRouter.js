import {Router} from "express";
import ServiceController from "../controllers/serviceController.js";
const router = new Router()
const serviceController = new ServiceController()

router.post('/create', serviceController.create)
router.post('/delete/:id', serviceController.deleteOne)
router.post('/update/:id', serviceController.update)
router.post('/AddUser', serviceController.AddForUser)
router.post('/DelUsServ/:id', serviceController.deleteUserService)
router.get('/getAll', serviceController.getAll)
router.get('/getAllUsServ/:id', serviceController.getAllUsServ)
router.get('/getAllUsServAll', serviceController.getAllUsServAll)
router.get('/getOne/:id', serviceController.getOne)

export default router