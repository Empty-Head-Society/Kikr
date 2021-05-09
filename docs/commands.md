# Adding your own commands
This section of the docs guides you through the process of using the command handler/adding commands.

### Command Handler Layout
````js
module.exports = {
	name: "",
	description: "",
	aliases: ["", ""],
	category: "",
	run: async(client, message, args) => {
		// Your code here
	}
}
````

### Example Command
````js
const Discord = require('discord.js);

module.exports = {
	name: "ping",
	description: "Sends clients ping",
	aliases: [""],
	category: "info",
	run: async(client, message, args) => {
		message.channel.send(`\`${client.ws.ping}ms\``);
	}
}
````

### Who made the command handler?
The command handler was made by [CTK-Warrior](https://github.com/CTK-WARRIOR/) for the [Guide-discord.js-v12](https://github.com/CTK-WARRIOR/Guide-discord.js-v12) repository/tutorial on: `Day 2`.
