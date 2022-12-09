import {Router} from "express";
import typeController from "../controllers/typeController.js";
const router = new Router();
const TypeController = new typeController()


router.post('/create', TypeController.Create)
router.get('/', TypeController.getAll)

export default router