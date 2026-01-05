const express = require("express")

const UserController = require("../controller/Usercontroller")



const router = express.Router()

router.get("/get" , UserController.getUser)


module.exports = UserRoutes = router