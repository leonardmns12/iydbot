const Discord = require('discord.js');
const { prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready',()=>{
    console.log('Ready');
})

client.on("guildMemberAdd", function(member){
    member.send("Hello " + member.displayName + " Selamat datang di server In Your Dream :wave:");
    let memberRole = member.guild.roles.find("name", "Member");
    member.addRole(memberRole);
    let guild = member.guild; // Reading property `guild` of guildmember object.
    let memberTag = member.user.tag; // GuildMembers don't have a tag property, read property user of guildmember to get the user object from it
    if(guild.systemChannel){ // Checking if it's not null
	guild.systemChannel.send(memberTag + " Telah bergabung kedalam server!");
}
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
    message.member.addRole(memberRole).catch(console.error);
}
if(message.content == 'request role: CSGO')
{
    message.member.send("Role anda saat ini telah di update!");
    let memberRole = message.member.guild.roles.find("name", "CSGO");
    message.member.addRole(memberRole).catch(console.error);
}
if(message.content == 'request role: BINUSSIAN')
{
    message.member.send("Role anda saat ini telah di update!");
    let memberRole = message.member.guild.roles.find("name", "BINUSSIAN");
    message.member.addRole(memberRole).catch(console.error);
}


})


client.login(process.env.BOT_TOKEN);
