const { RTMClient } = require('@slack/rtm-api')
const { WebClient } = require("@slack/web-api")

module.exports = async function() {
  const client = new RTMClient(process.env.SLACK_BOT_TOKEN)
  const web = new WebClient(process.env.SLACK_BOT_TOKEN)

  client.on('message', (event) => {
    if (event.text == 'ping') {
      web.chat.postMessage({
        text: 'pong',
        channel: event.channel,
      })
    }
  })

  client.start().then(() => {
    console.log('\u001b[34m[service]\u001b[0m Slack connected!')
  })
}
