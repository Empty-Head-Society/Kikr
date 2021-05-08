const Discord = require('discord.js');
const { Message } = require('discord.js');
const kisses = [
    'https://media.tenor.com/images/924c9665eeb727e21a6e6a401e60183b/tenor.gif',
    'https://media.tenor.com/images/b020758888323338c874c549cbca5681/tenor.gif',
    'https://media.tenor.com/images/0136ddedea728ae27df8fbcd19d680f5/tenor.gif',
    'https://media.tenor.com/images/6702ca08b5375a74b6b9805382021f73/tenor.gif'
];
module.exports = {
    name: "kiss",
    description: "Kisses an user",
    usage: "kiss <user>",
    category: "fun",
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
        if (!user) return message.channel.send('Please provide someone to kiss!');
        return message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${message.author.username} kisses ${user.username}`)
            .setColor('#029ad5')
            .setImage(kisses[Math.floor(Math.random() * kisses.length)])
            .setFooter('Requested By ' + message.author.tag)
            .setTimestamp()
        );
    }
}