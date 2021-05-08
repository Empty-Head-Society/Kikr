const Discord = require('discord.js');
const { Message } = require('discord.js');
const punchs = [
    'https://media1.tenor.com/images/ee3f2a6939a68df9563a7374f131fd96/tenor.gif?itemid=14210784',
    'https://media.tenor.com/images/8e51636630e8eed819dd59f92c928795/tenor.gif',
    'https://media.tenor.com/images/1dcba5faac6462fa788487c99cd678c9/tenor.gif',
    'https://media.tenor.com/images/2dfb030da07fe89448bb636c5e969ece/tenor.gif'
];
module.exports = {
    name: "punch",
    description: "Punch an user",
    usage: "punch <user>",
    category: "fun",
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
        if (!user) return message.channel.send('Please provide someone to punch!');
        return message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${message.author.username} punched ${user.username}`)
            .setColor('#029ad5')
            .setImage(punchs[Math.floor(Math.random() * punchs.length)])
            .setFooter('Requested By ' + message.author.tag)
            .setTimestamp()
        );
    }
}