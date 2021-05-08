const DIG = require("discord-image-generation");
const Discord = require("discord.js");

module.exports = {
        name: 'delete',
        description: 'Delete a user from your pc.',
        aliases: ["trash"],
        usage: '',
        accessableby: "",
    run: async (client, message, args) => {
   
 let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
 let m = await message.channel.send("**Please Wait...**");   
 let avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img = await new DIG.Delete().getImage(avatar);

    let attach = new Discord.MessageAttachment(img, "delete.png");
    m.delete({ timeout: 5000 });

    const mention = message.mentions.users.first()
    const embed = new Discord.MessageEmbed()

    .setTitle(`${mention.username} has been moved to the trash.`)
    .attachFiles(attach)
    .setImage('attachment://delete.png')
    .setColor('#029ad5')
    .setFooter('Requested by ' + message.author.tag)
    .setTimestamp();

    message.channel.send(embed);
  },
};
