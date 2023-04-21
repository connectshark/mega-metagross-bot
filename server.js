import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'
dotenv.config()
const token = process.env.TOKEN
const bot = new TelegramBot(token, {polling: true})


bot.onText(/\/start/,  (msg) => {
  console.log(msg)
  const chatId = msg.chat.id
  const resp = '你好'
  bot.sendMessage(chatId, resp)
})

bot.onText(/\/cal (.+)/, function (msg, match) {
  const fromId = msg.from.id
  const resp = match[1].replace(/[^-()\d/*+.]/g, '')
  resp = '計算結果為: ' + eval(resp)
  bot.sendMessage(fromId, resp)
})