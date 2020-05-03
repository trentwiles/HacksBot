const Discord = require('discord.js');
const client = new Discord.Client();
const request = require("request");

const prefix = "--"

client.on("ready", () => {
  console.log("Ready!");
  client.user.setGame('Hacks');
});



client.on("message", (message) => {

  // check if user is bot
  if (message.author.bot) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    var ping = Date.now() - message.createdTimestamp + " ms";
    if (ping > 200) {
      var warn = "Warning, your ping is very high.";
    } else {
      var warn = "Your ping seems to be fine.";
    }

    const timerEmbed = new Discord.MessageEmbed()
      .setColor("red")
      .addField("Your Ping", ping);
    message.channel.send(warn);
    message.channel.send(timerEmbed);
  }
  
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send("INVITE HERE");
  } 
  
    if (message.content.startsWith(prefix + "help")) {
      const help = new Discord.MessageEmbed()
      .setColor("blue")
      .addField("Help:" , "Read this for how to use the bot.")
      .addField("--ping" , "Shows your connection to the sever.")
      .addField("--hack" , "Hack another user in the sever. *Coming Soon*")
      .addField("--insult" , "Test your confidence level with some Discord tailored insults.")
      message.channel.send(help);
    }
  
  if (message.content.startsWith(prefix + "insult")) {
    let number = Math.floor((Math.random() * 4) + 1);
    if (number === 1){
      message.channel.send("Honestly, why are you wasting your life on discord. ||Just why?||");
    } if (number === 2){
      message.channel.send("Congrats on you two server members, you and I.");
    }if (number === 3){
      message.channel.send("What have you achived in your life? I have an answer ==> ||Nothing.||");
    }if (number === 4){
      message.channel.send("You are like the people who hack roblox games, but worse.");
    } else {
      console.log('other number');
    }
  }
  if (message.content.startsWith(prefix + "vsco")) {
    message.channel.send("Are you a VSCO girl? ==> https://apps.riverside.rocks/apps/vsco");
  }
  if (message.content.startsWith(prefix + "hack")){
          message.channel.send("Please wait as we start the hacks...");
        }
  if (message.content.startsWith(prefix + "news")){
    request("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b5703dbf0fd64142aca8aa1fbcb4d12f", function(err, res, body) {
    if(!err && res.statusCode == 200) { // Successful response
      message.channel.send(JSON.parse(body)); // Displays the response from the API
    } else {
        console.log(err);
    }
});
  }
  
});

client.login(process.env.DISCORD_BOT_TOKEN);