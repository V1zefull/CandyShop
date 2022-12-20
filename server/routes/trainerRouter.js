import {Router} from "express";
import trainerController from "../controllers/trainerController.js";
const router = new Router();
const TrainerController = new trainerController()

router.post('/create', TrainerController.create)
router.post('/delete/:id', TrainerController.DeleteOne)
router.post('/update/:id', TrainerController.update)
router.get('/getAll', TrainerController.getAll)
router.get('/getOne/:id', TrainerController.getOne)

export default router