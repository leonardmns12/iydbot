const Discord = require('discord.js');
const { prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready',()=>{
    console.log('Ready');
	client.user.setPresence({ game: { name: 'In Your Dream ', type: 3 } });
})

client.on("guildMemberAdd", function(member){
    member.send("Hello " + member.displayName + " Selamat datang di server In Your Dream :wave:\n Request role mu segera di channel #role-request:busts_in_silhouette: ");
    let memberRole = member.guild.roles.find("name", "CHIEF");
    member.addRole(memberRole);
    let guild = member.guild; // Reading property `guild` of guildmember object.
    let memberTag = member.user.tag; // GuildMembers don't have a tag property, read property user of guildmember to get the user object from it
    if(guild.systemChannel){ // Checking if it's not null
	guild.systemChannel.send(memberTag + " Telah bergabung kedalam server!");
}
});

client.on('message', message => {
	
    if(message.content == "!role:CSGO"){
    message.member.send("Role CSGO anda berhasil di update! :champagne_glass: ");
    let memberRole = message.member.guild.roles.find("name", "CSGO🔫");
    message.member.addRole(memberRole);
    message.react('✅');
    }
    if(message.content == "!role:GTA V"){
    message.member.send("Role GTA V anda berhasil di update! :champagne_glass: ");
    let memberRole = message.member.guild.roles.find("name", "GTA V🏡");
    message.member.addRole(memberRole);
    message.react('✅');
    }
    if(message.content == "!role:BINUSSIAN"){
    message.member.send("Role BINUSSIAN anda berhasil di update! :champagne_glass:  ");
    let memberRole = message.member.guild.roles.find("name", "BINUSSIAN📙");
    message.member.addRole(memberRole);
    message.react('✅');
    }
    if(message.content == "!role:TOXIC"){
        message.member.send("Role BINUSSIAN anda berhasil di update! :champagne_glass:  ");
        let memberRole = message.member.guild.roles.find("name", "TOXIC❌");
        message.member.addRole(memberRole);
        message.react('✅');
        }
    if(message.content == "!role:DOTA"){
    message.member.send("Role BINUSSIAN anda berhasil di update! :champagne_glass:  ");
    let memberRole = message.member.guild.roles.find("name", "DOTA🏹");
    message.member.addRole(memberRole);
    message.react('✅');
    }
    if(message.content == "!role:CONTENT CREATOR"){
        message.member.send("Role CONTENT CREATOR anda berhasil di update! :champagne_glass:  ");
        let memberRole = message.member.guild.roles.find("name", "CONTENT CREATOR🎥");
        message.member.addRole(memberRole);
        message.react('✅');
        }
    // console.log(message.content);

    if( message.content.startsWith(`${prefix}kick`)){
        // message.channel.send("Kick")
        if(message.member.hasPermissions(['KICK_MEMBERS', "BAN_MEMBERS"])){
        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " Telah Dikeluarkan dari Server!:wave:")
        })
    }else{
	    message.channel.send("Kamu tidak dapat akses untuk perintah ini!")
    }
    }

    if( message.content.startsWith(`${prefix}status`)){
        message.channel.send('Bot Currently Online!');
        message.channel.send("Bot Version 1.2.4");
    }

    if( message.content.startsWith(`${prefix}contact`)){
        message.reply(' Have any issues? ');
        message.channel.send("Contact : leonardmanoza@gmail.com");
    }
    if( message.content.startsWith(`${prefix}command`)){
        message.channel.send("List of bot Command!");
        message.channel.send("1. !role:<your role>\tplease request role only in #role-request channel :busts_in_silhouette: ");
        message.channel.send("2. !status\tdisplay bot status  :white_check_mark: ");
        message.channel.send("3. !contact \tto contact our developer :e_mail: \n4. !report <tag people> <reason>\tto report people!");
        message.channel.send("5. !kick <member tag>\tkick member from the group (Developer / Admin / Security role only have this access) :no_entry: ");
        message.channel.send("6. !ban <member tag>\tban member from the group (Developer / Admin / Security role only have this access) :no_entry_sign: ");
    }
    
})


client.on("message", async message => {
    if(message.author.bot)return;
    if(message.channel.type === "dm")return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}report`){


        let rUser= message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
        if(!rUser) return message.channel.send("Tidak dapat menemukan user!");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Report-Info")
        .setColor("#15f153")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", reason);

        let reportschannel = message.guild.channels.find(`name`, "report-log⚠");
        if(!reportschannel)return message.channel.send("Tidak dapat menemukan report channel");

        message.delete().catch((O_o) => {});
        reportschannel.send(reportEmbed);


        return;
    }



})

client.login(process.env.BOT_TOKEN);
