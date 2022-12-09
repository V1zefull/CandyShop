import {Router} from "express";
import BrandController from "../controllers/brandController.js";
const router = new Router()
const brandController = new BrandController();

router.post('/', brandController.create)
router.get('/getAll', brandController.getAll)

export default router