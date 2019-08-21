const Discord = require('discord.js');
const { prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready',()=>{
    console.log('Ready');
})

client.on("guildMemberAdd", function(member){
    member.send("Hello " + member.displayName + " Selamat datang di server In Your Dream :wave: \nketik !info untuk melihat command semua command yang tersedia! :point_down: ");
    let memberRole = member.guild.roles.find("name", "Member");
    member.addRole(memberRole);
});

client.on('message', message => {

    if(message.member.hasPermissions(['KICK_MEMBERS', "BAN_MEMBERS"])){


    // console.log(message.content);

    if( message.content.startsWith(`${prefix}kick`)){
        // message.channel.send("Kick")

        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " Telah Dikeluarkan dari Server!:wave:")
        })
    }

  

}
if(message.content == 'request role: GTA V')
{
    message.member.send("Role anda saat ini telah di update!");
    let memberRole = message.member.guild.roles.find("name", "GTA V");
    message.member.addRole(memberRole);
}
if(message.content == 'request role: CSGO')
{
    message.member.send("Role anda saat ini telah di update!");
    let memberRole = message.member.guild.roles.find("name", "CSGO");
    message.member.addRole(memberRole);
}
if(message.content == 'request role: BINUSSIAN')
{
    message.member.send("Role anda saat ini telah di update!");
    let memberRole = message.member.guild.roles.find("name", "BINUSSIAN");
    message.member.addRole(memberRole);
}


})


client.login(process.env.BOT_TOKEN);
