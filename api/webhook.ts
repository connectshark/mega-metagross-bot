import type { VercelRequest, VercelResponse } from '@vercel/node'
import bot from '../bot'

export default async function (req: VercelRequest, res: VercelResponse) {
  const {
    body
  } = req
  
  const {
    from: {
      username,
      id
    },
    text
  } = body.message
  
  if (text) {
    await bot.sendMessage(id, `Hi! ${username}, 你說: ${text}`)
  }
  
  res.status(204).send('')
}