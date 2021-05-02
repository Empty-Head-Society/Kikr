const covid = require('novelcovid');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'covid19',
    description: 'Provides statistics about the COVID-19 pandemic from various countries',
    aliases: ["corona", "coronavirus"],
    cooldown: 2,
    args: -1,
    category: 'info',
   run: async (client, message, args) => {
        if (!args[0]) {
            const covidStats = await covid.all();
            return message.channel.send(new MessageEmbed()
                .setTitle('COVID-19 Stats (Worldwide)')
                .setColor("#029ad5")
                .addField('Cases', covidStats.cases.toLocaleString(), true)
                .addField('Deaths', covidStats.deaths.toLocaleString(), true)
                .addField('Recovered', covidStats.recovered.toLocaleString(), true)
                .addField('Cases Today', covidStats.todayCases.toLocaleString(), true)
                .addField('Deaths Today', covidStats.todayDeaths.toLocaleString(), true)
                .addField('Recovered Today', covidStats.todayRecovered.toLocaleString(), true)
                .addField('Current Infections', covidStats.active.toLocaleString(), true)
                .addField('Critical Condition', covidStats.critical.toLocaleString(), true)
                .addField('Tested', covidStats.tests.toLocaleString(), true)
                .setFooter('Requested by ' + message.author.tag, message.author.avatarURL())
                .setTimestamp()
            );
        }
        else {
            const covidStats = await covid.countries({ country: args[0] });
            const errorMessage = "Country not found or doesn't have any cases";
            if (covidStats.message == errorMessage) return message.channel.send(errorMessage);

            return message.channel.send(new MessageEmbed()
                .setTitle(`COVID-19 Stats (${args[0]})`)
                .setColor("#029ad5")
                .addField('Cases', covidStats.cases.toLocaleString(), true)
                .addField('Deaths', covidStats.deaths.toLocaleString(), true)
                .addField('Recovered', covidStats.recovered.toLocaleString(), true)
                .addField('Current Infections', covidStats.active.toLocaleString(), true)
                .addField('Critical Condition', covidStats.critical.toLocaleString(), true)
                .addField('Tested', covidStats.tests.toLocaleString(), true)
                .setFooter('Requested by ' + message.author.tag, `${message.author.avatarURL()}`)
                .setTimestamp()
            )
        }
    }
}
