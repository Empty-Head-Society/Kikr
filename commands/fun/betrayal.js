const Discord = require('discord.js');

module.exports = {
  name: 'betrayal',
  run: async(client, message, args) => {
    if (!message.member.voice.channel) {
      message.channel.send('Please join a voice channel to play: **Betrayal.io**')
    }

    if(message.member.voice.channel) {

client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
    return message.channel.send(`${invite.code}`);
});

    }

  }
}