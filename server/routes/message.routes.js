import express from 'express'
import { protect } from '../middlewares/auth.js'
import { imageMessageController, textMessageController } from '../controllers/message.controller.js'

const messageRouter = express.Router()

messageRouter.post("/text", protect, textMessageController)
messageRouter.post("/image", protect, imageMessageController)

export default messageRouter