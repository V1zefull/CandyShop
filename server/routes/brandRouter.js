import {Router} from "express";
import BrandController from "../controllers/brandController.js";
const router = new Router()
const brandController = new BrandController();

router.post('/create', brandController.create)
router.get('/getAll', brandController.getAll)
router.get('/getOne/:id', brandController.getOne)

export default router