const { Client, Collection, Intents, MessageEmbed } = require('discord.js');

module.exports = async function() {
  const token = process.env.DISCORD_BOT_TOKEN;
  const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

  client.once('ready', () => {
    console.log('\u001b[34m[service]\u001b[0m Discord connected!');
  });

  client.on("messageCreate", message => {
      if (message.content == 'ping') {
        message.channel.send('pong');
      }
  });

  client.login(token);
}
