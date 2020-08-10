module.exports = async (bot) => {
    console.log([
        `The Bot Is Logged In As ${bot.user.tag}`,
        `Working For ${bot.users.cache.size} Members & ${bot.guilds.cache.size} Servers!`
    ].join('\n'))
}