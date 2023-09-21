const express = require("express")
const {createMessage, getMessages} = require("../Contollers/messageController")


const router = express.Router()

router.post("/", createMessage)
router.checkout("/:chatId", getMessages)


module.exports = router