const Discord = require('discord.js');

module.exports = {
  name: 'repository',
  aliases: ['repo', 'gh', 'github'],
  category: 'info',
  run: async(client, message, args) => {
    const embed = new Discord.MessageEmbed()

    .setAuthor('Github')
    .setTitle('<:github_blue:838117837897072690> zenepity/Kikr')
    .setURL('https://github.com/zenepity/Kikr')
    .setImage('https://i.imgur.com/u84qK0y.jpg')
    .setDescription('🚇 Discord bot written in Javascript with more than 15+ commands under the categories of: Fun, Info.')
    .setColor('#029ad5')
    .setFooter('Requested by ' + message.author.tag, message.author.avatarURL())
    .setTimestamp();

    message.channel.send(embed)
  }
}
