const Discord = require('discord.js');
const { Message } = require('discord.js');
const kills = [
    'https://media.tenor.com/images/d3fe217e10f547255c8389bfec20fa9e/tenor.gif',
    'https://media.tenor.com/images/f8a0b0df6657ee1cf5d0315268f24f6a/tenor.gif',
    'https://media.tenor.com/images/fe925091fd7b9b96b6db3fdf7c4124e5/tenor.gif',
    'https://media.tenor.com/images/d12c0568ee3140f2fb31b8d51366162e/tenor.gif',
    'https://media.tenor.com/images/c7dff10ca437305383b50eef0b8b5f58/tenor.gif',
    'https://media.tenor.com/images/7ef00d7699bab91ddaca5b9918cec180/tenor.gif'
];
module.exports = {
    name: "kill",
    description: "Kills an user",
    usage: "kill <user>",
    category: "fun",
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
        if (!user) return message.channel.send('Please provide someone to kill!');
        return message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${message.author.username} killed ${user.username}`)
            .setColor('#029ad5')
            .setImage(kills[Math.floor(Math.random() * kills.length)])
            .setFooter('Requested By ' + message.author.tag)
            .setTimestamp()
        );
    }
}