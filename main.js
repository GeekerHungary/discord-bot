const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '-';

client.on('ready', () => {
  console.log('Online!');
  client.user.setActivity('-ping', {type: 'PLAYING'});
});

client.on('messageCreate', async (message) => {
if(message.author.bot) { return; }
const args = message.content.slice(prefix.length).split(/ +/g);

// -- SIMPLE COMMANDS

if(message.content === `${prefix}ping`) {
  message.reply('Pong!');
}

// -- EMBEDS
if(message.content === '-embed') {
  const embed = new MessageEmbed()
  .setTitle('Cím')
  .setDescription('Leírás')
  .addField('Alcím címe', 'Alcím értéke')
  .setTimestamp()
  .setColor('BLUE')
  message.channel.send({ embeds: [embed] });
}
});

client.login(process.env.BOT_TOKEN);
