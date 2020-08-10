const {
    MessageEmbed
} = require('discord.js');
const {
    prefix
} = require('../config.json');

module.exports = async (bot, message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()
    if (command === 'ping') {
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
}