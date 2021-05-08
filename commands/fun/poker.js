const Discord = require('discord.js');

module.exports = {
  name: 'poker',
  run: async(client, message, args) => {
    if (!message.member.voice.channel) {
      message.channel.send('Please join a voice channel to play: **Poker**')
    }

    if(message.member.voice.channel) {

client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
    return message.channel.send(`${invite.code}`);
});

    }

  }
}