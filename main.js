const Discord = require('discord.js');
const DaleBabyBot = require('./bot.js')

// Initialize Discord Bot
const client = new Discord.Client();
const bot = new DaleBabyBot();

client.on('ready', bot.handleStart);
client.on('message', bot.handleMessage);

client.login(bot.authToken);