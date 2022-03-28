const { Telegraf } = require('telegraf')

module.exports = async function() {
  const client = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

  client.on('text', async (context) => {
    if (context.message.text == 'ping') {
      return context.reply('pong')
    }
  })

  client.launch().then(() => {
    console.log('\u001b[34m[service]\u001b[0m Telegram connected!')
  })
}
