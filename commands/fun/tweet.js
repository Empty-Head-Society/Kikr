const fetch = require("node-fetch")
const Discord = require('discord.js');

module.exports = {
  name: "tweet",
  description: "Returns an image with your tweet",
  category: "fun",
  run: async(client, message, args) => {
    const text = args.join(" ");
    const { username } = message.author;

    const sendMsg = await message.channel.send('**Please Wait...**');

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=tweet&text=${encodeURIComponent(
        text
      )}&username=${username}`
    )
      .then((res) => res.json())
      .catch(() => {
        message.channel.send('**An error has occoured**');
      });

    sendMsg.delete();

    const embed = new Discord.MessageEmbed()
      .setTitle(message.author.username + ' has posted a tweet')
      .setImage(data.message)
      .setFooter('Requested by ' + message.author.tag)
      .setColor('#029ad5')
      .setTimestamp();

    message.channel.send(embed);
  },
};
