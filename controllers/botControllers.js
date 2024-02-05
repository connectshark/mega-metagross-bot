import bot from '../bot/index.js'

const replySameMessage = async (id, text) => {
  await bot.sendMessage(id, text)
}
export {
  replySameMessage
}