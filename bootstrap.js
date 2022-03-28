const path = require('path')

async function bootstrap(app) {
  load_contants()
  load_views(app)
  load_routes(app)

  await load_discord_service()
  await load_slack_service()
  await load_telegram_service()
}

function load_contants() {
  global.__dir_src = path.join(__dirname, 'src')
  global.__dir_routes = path.join(__dir_src, 'routes')
  global.__dir_views = path.join(__dir_src, 'views')
  global.__dir_services = path.join(__dir_src, 'services')
}

function load_views(app) {
  app.set('views', __dir_views)
  app.set('view engine', 'pug')
}

function load_routes(app) {
  const indexRouter = require(__dir_routes)
  app.use("/", indexRouter)
}

async function load_discord_service() {
  await require(path.join(__dir_src, 'services', 'discord', 'client'))()
}

async function load_slack_service() {
  await require(path.join(__dir_src, 'services', 'slack', 'client'))()
}

async function load_telegram_service() {
  await require(path.join(__dir_src, 'services', 'telegram', 'client'))()
}

module.exports = { bootstrap }
