const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log('READY!!!'); 
});

client.on('message', message => {
    if(message.content == "tut!ping") {
        message.reply('pong!')
    }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
