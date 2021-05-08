const Discord = require('discord.js');

module.exports = {
  name: 'rockpaperscissors',
  aliases: ['rps'],
  run: async(client, message, args) => {
    const options = [
        'Rock!',
        'Paper!',
        'Scissors!'
    ]

    message.channel.send('I choose... ' + '**' + options[Math.floor(Math.random() * options.length)] + '**')
  }
}