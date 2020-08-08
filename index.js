const {
    Client,
    MessageEmbed
} = require('discord.js');
const bot = new Client();
const {
    prefix,
    token
} = require('./config.json');

bot.on('ready', () => {
    console.log('The Bot Is Online');
})
bot.on('message', async (message) => {
    if (message.content.toLowerCase() === `${prefix}ping`) {
        let msg = await message.channel.send('Pinging...');
        const pingembed = new MessageEmbed()
            .setColor('#32cd32')
            .addField('🏓 Pong!', [
                `The WebSocket Ping Is ${bot.ws.ping}MS`,
                `The Message Edit Ping Is ${msg.createdAt - message.createdAt}MS`
            ])
        msg.delete()
        return message.channel.send(pingembed)
    }
})

bot.login(token)