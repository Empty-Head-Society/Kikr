const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  category: 'info',
  run: async(client, message, args) => {
    const embed = new Discord.MessageEmbed()

    .setDescription(`<@${message.author.id}>, pong! ${client.ws.ping}ms`)
    .setColor('#029ad5')

    message.channel.send(embed)
  }
}
