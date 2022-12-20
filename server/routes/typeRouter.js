import {Router} from "express";
import typeController from "../controllers/typeController.js";
import serviceTypeController from "../controllers/serviceTypeController.js"
const router = new Router();
const TypeController = new typeController()
const ServiceTypeController = new serviceTypeController()


router.post('/create', TypeController.Create)
router.post('/service/create', ServiceTypeController.Create)
router.post('/service/update/:id', ServiceTypeController.update)
router.get('/service/getAll', ServiceTypeController.getAll)
router.get('/service/getOne/:id', ServiceTypeController.getOne)
router.get('/', TypeController.getAll)
router.get('/getOne/:id', TypeController.getOne)

export default router