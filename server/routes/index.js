import {Router} from "express";
import brandRouter from './brandRouter.js'
import serviceRouter from './serviceRouter.js'
import serviceInfoRouter from './serviceInfoRouter.js'
import typeRouter from './typeRouter.js'
import trainerRouter from './trainerRouter.js'
import authroutes from './auth.routes.js'

const router = new Router()

router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/service', serviceRouter)
router.use('/serviceInfo', serviceInfoRouter)
router.use('/trainer', trainerRouter)
router.use('/auth', authroutes)

export default router