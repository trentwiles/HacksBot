const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "--"

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {

  // check if user is bot
  if (message.author.bot) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    var ping = Date.now() - message.createdTimestamp + " ms";

    const timerEmbed = new Discord.MessageEmbed()
      .setColor("red")
      .addField("Your Ping", ping);

    message.channel.send(timerEmbed);
  }
  
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send("INVITE HERE");
  } 
  
  if (message.content.startsWith(prefix + "insult")) {
    let number = Math.floor((Math.random() * 3) + 1);
    if (number === 1){
      message.channel.send("1");
    } if (number === 2){
      message.channel.send("2");
    } else {
      console.log('other number');
    }
  }
  
});

client.login(process.env.DISCORD_BOT_TOKEN);