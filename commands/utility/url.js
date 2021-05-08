const Discord = require('discord.js')
const fetch = require('node-fetch')

// Thanks to probot.io for the idea!

module.exports = {
  name: 'url',
  aliases: ['shorten', 'short', 'shorturl', 'is.gd', 'shortenurl'],
  category: 'utility',
  run: async(client, message, args) => {

      const url = args[0]

          if (!args) {
        return message.channel.send("Please Provide a Link To Shorten!");
    }

    const res = await fetch(`https://is.gd/create.php?format=simple&url=${encodeURI(url)}`);
    const body = await res.text();

    if (body === "Error: Please enter a valid URL to shorten") {
        return message.channel.send("Invalid or blacklisted URL");
    }

    const embed = new Discord.MessageEmbed()
        .setTitle('Here\'s your URL!')
        .setColor(`#029ad5`)
        .setFooter("Requested by" + message.author.tag, message.author.avatarURL())
        .setTimestamp()
        .setDescription(body);
    message.channel.send(embed)
  }
}
