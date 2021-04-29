const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready to destroy !');
});

client.on('message', (message) => {
    if (message.content.startsWith('!Silmarillion')){
        let mention = message.mentions.members();
        mention.ban();
    }
})

client.on('message',async message => {
   
    let blacklisted = ['crg', 'Crg', 'Cringe', 'CRINGE']

    let foundInText = false;
    for (var i in blacklisted) {
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true; 
    }

    if (foundInText) {
        message.delete();
        message.channel.send('Désolé ce mot est blacklisté sur ce serveur');
    }


})

client.login(process.env.TOKEN);