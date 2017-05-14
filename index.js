const commando = require('discord.js-commando');
const sqlite = require('sqlite');
const path = require('path');
const config = require('./config.json');

const bot = new commando.Client({ owner: config.owner });

bot.registry
  .registerGroups([
    ['fun', 'Fun'],
  ]).registerDefaults()
  .registerCommandsIn(path.join(__dirname, '/commands'));

bot.setProvider(sqlite.open(path.join(__dirname, 'settings.sqlite3'))
  .then(db => new commando.SQLiteProvider(db)));

bot.login(config.token);
