
'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('470583358:AAHBBR-4s390jXwZfIC4GzDGCu7ot2lU4wU')

class EventsController extends TelegramBaseController {

  btcNowAction(scope) {
    let msg = `Cotação atual: 22.654,25`
    scope.sendMessage(msg)
  }

  get routes() {
    return {
      'showCurrent': 'btcNowAction' 
    }
  }

}

chatbot.router
.when(
  new TextCommand('/btcnow', 'showCurrent'), new EventsController(),
  new TextCommand('/btclow', 'allEvents'), new EventsController()
)