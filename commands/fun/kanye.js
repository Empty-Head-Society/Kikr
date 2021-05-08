module.exports = {
  name: 'kanye',
  description: "Sends a random Kanye West quote",
  aliases: ['kanyewest', 'kw'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'fun',
  run: async (client, message, args) => {
    try {
      const request = require('superagent')
      request.get('https://api.kanye.rest/').then(res => {
        if (res.statusCode !== 200) return;
        const Kanye = (JSON.parse(res.text)).quote;
        return message.channel.send({
          embed: {
            title: "Kanye West Says...",
            description: `**${Kanye}**`,
            color: "#029ad5",
            footer: {
              text: "Requested by " + message.author.tag,
              icon_url: message.author.displayAvatarURL()
            },
            timestamp: new Date()
          }
        });
      })
    } catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
};
