var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "588762963951878144" && message.channel.id === "397024701894885380"){
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "bang" && message.channel.id === "397024701894885380"){
                message.channel.send('IGC BOOM!!!!!') // Sends a message to the channel, with the content

    }
});

bot.login(process.env.BOT_TOKEN)

