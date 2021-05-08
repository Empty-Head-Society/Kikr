// Packages
const Discord = require('discord.js')
require('discord-reply')
const fs = require('fs')
const { Signale } = require('signale')
const { DiscordTogether } = require('discord-together')
const { chatBot } = require('tech-tip-cyber');

// Variables
const client = new Discord.Client({
  disableEveryone: true,
  presence: {
    status: "idle",
  }
})

require('./utils/express.js')

const signale = new Signale()
const { token, prefix } = require('./configs/config.json');

client.discordTogether = new DiscordTogether(client, {
    token: token
});

client.on('ready', () => {
  signale.success('Logged in as ' + client.user.tag + '!');
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix || prefix2)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args)
})

client.on("message", async message => {
  if(message.channel.id === '840463126125871134') {
    if(message.author.bot) return;
        const reply = await chatBot({ Message: message });
        message.lineReply(`${reply}`)
  }
});

client.login(token).catch(console.error);
