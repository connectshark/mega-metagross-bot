import express from 'express'
const router = express.Router()
import { replySameMessage } from '../controllers/botControllers.js'

const messageHandler = async (req, res) => {
  const { message } = req.body
  await replySameMessage(message.from.id, message.text)
  res.status(204).send('')
}

router.route('/')
  .post(messageHandler)

export default router