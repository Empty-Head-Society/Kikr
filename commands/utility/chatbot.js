const { chatBot } = require('tech-tip-cyber')
require('discord-reply');
const Discord = require('discord.js')

module.exports = {
  name: 'chat-bot',
  aliases: ['chat', 'chatbot'],
  run: async(client, message, args) => {

      const msg = args.join(' ')
      
      const reply = await chatBot({ Message: msg });
      return message.lineReply(`${reply}`);
  }
}
