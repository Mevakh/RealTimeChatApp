const express = require("express")
const { createChat , findUserCharts, findChat } = require("../Controllers/chatController")

const router = express.Router()

router.post("/", createChat)
router.get("/:userId", findUserCharts)
router.get("/find/:firstId/:secondId", findChat)

module.exports = router