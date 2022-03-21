const path = require('path')

function bootstrap(app) {
  load_contants();
  
  load_discord_service();
  load_slack_service();
}

function load_contants() {
  global.__dir_routes = path.join(__dirname, 'routes')
  global.__dir_services = path.join(__dirname, 'services')
}

function load_discord_service() {
  require(path.join(__dirname, 'services', 'discord', 'client'))();
}

function load_slack_service() {

}

module.exports = { bootstrap }
