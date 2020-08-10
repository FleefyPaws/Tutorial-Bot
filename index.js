const {
    Client,
} = require('discord.js');
const bot = new Client();
const {
    token,
} = require('./config.json');

bot.on('ready', () => {
    require('./Events/ready')(bot)
})
bot.on('message', async (message) => {
    require('./Events/message')(bot, message)
})

bot.login(token)