const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    let gAvatar = message.guild.iconURL;
    let embed = new Discord.RichEmbed()

    .setColor("RANDOM")
    .setDescription(`Oi, eu sou o ${bot.user.username}! Aqui está meus comandos.\n \n \n|Administrador|:\n \nc!ban [PARA BANIR UM MEBRO QUE NÃO ENTÁ OBEDECENDO AS REGRAS].\n \nc!say [PARA ENVIAR UMA MENSAGEM].\n \nc!kick [PARA CHUTAR A PESSOA PRA FORA DO SERVIDOR DISCORD].\n \nc!tempmute [@usuário 10s/10h/10d motivo].\n \n \n|MEMBROS|:\n \nc!help [PARA VOCÊ VER MEUS COMANDOS].\n \nc!serverinfo [PARA VOCÊ VER AS INFORMAÇÕES DO SERVIDOR DISCORD].\n \nc!memes [EM DESENVOLVIMENTO].\n \nc!ping [PARA VER O PING DO BOT].\n \nc!notificar [PARA GANHAR UMA TAG NOTIFICADO]\n \nc!criador [PARA SABER QUEM ESTÁ ME DESENVOLVENDO/CRIO].\n \nc!time [PARA VER QUANTO TEMPO EU ESTOU ONLINE].\n \nc!sugestão [PARA ENVIAR UMA SUGESTÃO].\n \nc!avatar [PARA VER O SEU AVATAR OU AVATAR DE OUTRA PESSOA].\n \nc!userinfo [PARA SABER AS INFORMAÇÕES DO PLAYER].\n \n \nO bot ainda está em desenvolvimento então temos poucos comandos.`)

    message.author.send(embed);
    message.reply('envia tudo que você precisa em sua DM :wink:\n \n \nOBS: (Se não chego, é porquê sua DM está desativada, por favor ative e digite o comando novamente!)');
}

exports.help = {
    name: "help"
}
