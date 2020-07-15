const Discord = require("discord.js")
let client = new Discord.Client()
let {token} = require("./access.json")


client.login(token)