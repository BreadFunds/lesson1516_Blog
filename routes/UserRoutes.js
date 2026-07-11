import express from 'express'
const router = express.Router()

import { userForm, storeUser, dashboardUser} from '../controllers/UserController.js'

router.get("/", dashboardUser)
router.get("/create", userForm)
router.post("/store", storeUser)

export default router