const eventsApi = require('@slack/events-api')
const { WebClient, LogLevel } = require("@slack/web-api")

module.exports = async function() {
  const slackEvents = eventsApi.createEventAdapter(process.env.SLACK_SIGNING_SECRET)
  const client = new WebClient(process.env.SLACK_BOT_TOKEN, {
    logLevel: LogLevel.DEBUG
  })

  // slackEvents.on('start', () => {
  //   console.log('\u001b[34m[service]\u001b[0m Slack connected!')
  // })

  slackEvents.on('error', (err) => {
    console.log(err)
  })

  slackEvents.on('message', (event) => {
    console.log(event)
    if(event.type !== 'message') {
      return
    }
    if(event.message.text == 'ping') {
      client.chat.postMessage({
          token,
          channel: '#devteam',
          text: "Hello World!"
      })
    }
  })
}
