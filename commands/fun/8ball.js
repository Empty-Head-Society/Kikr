const Discord = require('discord.js');
const { Message } = require('discord.js');
const answers = [
    'hell no',
    'uhh i guess?',
    'yes, now please let me out your basement',
    'is the sky blue?',
    'no now fuck off',
    'shut the fuck up',
    'possibly',
    'am i going to hell? ||(thats a yes)||'
];

module.exports = {
    name: "8ball",
    description: "Replies with yes or no",
    usage: "8ball <question>",
    category: "fun",
    run: async (client, message, args) => {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`8ball replies to ${message.author.username}`)
            .setColor('#029ad5')
            .setDescription(answers[Math.floor(Math.random() * answers.length)])
            .setFooter('Requested By ' + message.author.tag)
            .setTimestamp()
        );
    }
}
