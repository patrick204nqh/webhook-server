const path = require('path')

async function bootstrap(app) {
  load_contants()

  await load_discord_service()
  await load_slack_service()
  await load_telegram_service()
}

function load_contants() {
  global.__dir_routes = path.join(__dirname, 'routes')
  global.__dir_services = path.join(__dirname, 'services')
}

async function load_discord_service() {
  await require(path.join(__dirname, 'services', 'discord', 'client'))()
}

async function load_slack_service() {
  require(path.join(__dirname, 'services', 'slack', 'client'))()
}

async function load_telegram_service() {
  await require(path.join(__dirname, 'services', 'telegram', 'client'))()
}

module.exports = { bootstrap }
