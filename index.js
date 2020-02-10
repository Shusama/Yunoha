const Discord = require("discord.js");
const {prefix, token} = require("./home/site/wwwroot/config.json");
const client = new Discord.Client();

//channel list
const general = "645592014456356864"
const bottest = "647857342964039682"
const botcommands = '647883612750086164'
//message.channel.id === bottest)

//Console start
client.once("ready", () => {
	console.log("Ready!");
});
//Commandlist
	client.on("message", message =>{
	if(message.channel.id === botcommands
		&& message.content.startsWith('Commands')) {
		message.delete();
		message.channel.send(
			"Hello, my name is Yunoha! You can ask me for help with these commands: "
			+"\n \t - Greeting you **type:** \"Hello Yunoha!\" "
			+"\n \t - Giving you access to nsfw channel **type:** \"I want to see the nsfw channel!\" "
			+"\n \t - Removing the nsfw channel for you **type:** \"I have depression now.\""
			+"\n \t - Remind everyone to vote for their anime **type:** \"!Reminder\" **Admin only command**"
			+"\n \t - Make me say something in general chat **type:** \"!say\" **Bot Admins only**"
			+"\n I will give my best to help you out!<:ow:645600987536687114>"
			+"\n \t "
			+"\n \t ");
		}
	})


//Administration Commands

	//Role

	client.on("message", message =>{
			if(message.content.startsWith('I want to see the nsfw channel'))
			{message.member.addRole("647371355179974656");
			message.channel.send("There you go!");}
	})
		client.on("message", message =>{
			if(message.content.startsWith('I have depression now'))
			{message.member.removeRole("647371355179974656");
			message.channel.send("Let me help you out.<:ow:645600987536687114>");}
	})



//Text Output Commands
	//Reminder
	client.on("message", message =>{
		if(message.content.startsWith(prefix+'Reminder') && message.author.bot === "false" && message.member.hasPermission(['ADMINISTRATOR']))
			{message.delete();
			message.channel.send("Good Morning @everyone!<:ow:645600987536687114> \n ");}
	})
	//Make her say something
	client.on("message", message =>{
		if(message.content.startsWith(prefix+'say') && message.channel.id === bottest)
			{let temp = message.content.replace("!say","")
			message.delete();
			client.channels.get(general).send(temp);}
	})

	//Hello
	client.on("message", message =>{
		if(message.content.startsWith('Hello Yunoha!'))
			{message.channel.send("Hello <:yay:646637327954870292>");}
	})
	/*
	// Rename on message
	client.on("message", message =>{
		if(message.author.tag.startsWith("Domarik"))
			{message.member.setNickname("Shu is the best! :)");}
		})
	/*
	//Action on author
	client.on("message", message =>{
		if(message.author.tag.startsWith("Domarik"))
			{message.delete();}
	
	})
	*/





//LOGIN
client.login(token);