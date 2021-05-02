const Discord = require('discord.js')
const wd = require('word-definition');

module.exports = {
  name: "define",
  description: "Define a word",
  category: "info",
  run: async(client, message, args) => {
    const word = args[0];

    if (!word) {
      return message.channel.send('**Error:** Please provide a word to define...');
    }

    wd.getDef(word.toLowerCase(), "en", null, (data) => {
      if (data.err) {
        message.channel.send('**Error:** Unknown');
      } else {
        const embed = new Discord.MessageEmbed()
          .setTitle('Definition of ' + word)
          .addField('Category', data.category)
          .addField('Definition', data.definition)
          .setColor('#029ad5')
          .setFooter('Requested by ' + message.author.tag, message.author.avatarURL())
          .setTimestamp();

        message.channel.send(embed);
      }
    });
  },
};
