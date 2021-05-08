const DIG = require("discord-image-generation");
const Discord = require("discord.js");

module.exports = {
        name: 'presentation',
        description: 'Put whatever you want on a projector.',
        aliases: ["present", "slideshow"],
        usage: '',
        accessableby: "",
    run: async (client, message, args) => {
   
 let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
 let m = await message.channel.send("**Please Wait...**");   
 let avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img = await new DIG.LisaPresentation().getImage(`${args.join(' ')}`);

    let attach = new Discord.MessageAttachment(img, "presentation.png");
    m.delete({ timeout: 5000 });

    const mentioneduser = message.mentions.members.first()
    const embed = new Discord.MessageEmbed()

    .setTitle(`${message.author.username} says ${args.join(' ')}`)
    .attachFiles(attach)
    .setImage('attachment://presentation.png')
    .setColor('#029ad5')
    .setFooter('Requested by ' + message.author.tag)
    .setTimestamp();

    message.channel.send(embed);
  },
};
