const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    let embed = new Discord.RichEmbed()

    .setTitle("Não encontrado!")
    .setColor("RANDOM")
    .setDescription(`Infelizmente não encontrei o comando, digite b!help para saber os comandos!`)

    message.channel.send(embed);
}

exports.help = {
    name: ""
}
