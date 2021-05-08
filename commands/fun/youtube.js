const Discord = require('discord.js');

module.exports = {
  name: 'youtube',
  aliases: ['yt'],
  run: async(client, message, args) => {
    if (!message.member.voice.channel) {
      message.channel.send('Please join a voice channel to play: **Youtube Together**')
    }

    if(message.member.voice.channel) {

client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
    return message.channel.send(`${invite.code}`);
});

    }

  }
}