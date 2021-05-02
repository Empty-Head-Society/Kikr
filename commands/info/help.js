const Discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports = {
  name: "help",
  description: "Gives you a list of kikr\'s commands.'",
  category: "info",
  run: async(client, message, args) => {

      const page1 = new Discord.MessageEmbed()
      .setTitle('Help Menu')
      .setDescription('You can navigate through commands using the reactions below the message.')
      .setColor('#029ad5')
      .addField('Info Commands', '\`\`\`help, ping, covid19, repository, define\`\`\`')
      .setFooter('Requested by ' + message.author.tag, message.author.avatarURL())
      .setTimestamp();

      const page2 = new Discord.MessageEmbed()
      .setTitle('Help Menu')
      .setDescription('You can navigate through commands using the reactions below the message.')
      .setColor('#029ad5')
      .addField('Fun Commands', '\`\`\`8ball, delete, emojify, hug, kanye, kill, kiss, presentation, punch, thomas, triggered, tweet\`\`\`')
      .setFooter('Written with ❤️ by Zenepity#1337')
      .setTimestamp();


      const pages = [
        page1,
        page2
      ]

      const emoji = ['◀️', '▶️']

      const timeout = '10000000'

      pagination(message, pages, emoji, timeout)
  }
}
