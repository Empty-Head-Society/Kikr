const Discord = require('discord.js');
const { Message } = require('discord.js');
const hugs = [
    'https://media.tenor.com/images/9fe95432f2d10d7de2e279d5c10b9b51/tenor.gif',
    'https://media.tenor.com/images/eed8d1a51f647b4be696879a0ad6f1f1/tenor.gif',
    'https://media.tenor.com/images/a9730f44f28d959abb4c5b31edc77de8/tenor.gif',
    'https://media.tenor.com/images/778282e02d511fbc061e1439a5105c6f/tenor.gif',
    'https://media.tenor.com/images/61ea96bce16c53a913336a3dbc1a6100/tenor.gif'
];
module.exports = {
    name: "hug",
    description: "Hugs an user",
    usage: "hug <user>",
    category: "fun",
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
        if (!user) return message.channel.send('Please provide someone to hug!');
        return message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${message.author.username} hugs ${user.username}`)
            .setColor('#029ad5')
            .setImage(hugs[Math.floor(Math.random() * hugs.length)])
            .setFooter('Requested By ' + message.author.tag)
            .setTimestamp()
        );
    }
}