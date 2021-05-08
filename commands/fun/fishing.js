const Discord = require('discord.js');

module.exports = {
  name: 'fishing',
  aliases: ['fish'],
  run: async(client, message, args) => {
    if (!message.member.voice.channel) {
      message.channel.send('Please join a voice channel to play: **Fishing.io**')
    }

    if(message.member.voice.channel) {

client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
    return message.channel.send(`${invite.code}`);
});

    }

  }
}