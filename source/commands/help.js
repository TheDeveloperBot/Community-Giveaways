const Discord = require("discord.js");
const Command = require("../handlers/command.js");
const bot = new Discord.Client({disableEveryone: false});

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "help",
            aliases: ["cmds"]
        });
    }

    execute(message) {
      let guild = message.guild.name;
        const prefix = this.client.config.prefix;
        message.reply('Hey! Check your DMs. :wink:');
        message.author.send({embed: {
    color: 3447003,
    author: {
      name:"Community Giveaways™",
     icon_url: "https://cdn.glitch.com/cc5cfeaf-3c95-481a-afcf-26c54f04bd11%2F1496175220emoji-android-party-popper.png?1531870031637"
    },
    title: "Commands list",
    url: "http://google.com",
    description: `The prefix in **${message.guild.name}** is **${prefix}**`,
    fields: [{
        name: "create",
      value:"Set up for the giveaway!"
      },
      {
        name: "delete",
        value:"Delete the previous giveaway"
      },
             {      
          name: "draw",
               value:"Force a draw"
      },
             {
               name:"redraw",
               value:"Redraw a winner"
             },
             {
               name:"ping",
               value:"Check to see if the bot responds"
             },
             {
        name: "Feedback",
               value: "[Discord Server](https://discord.gg/DrpkVTS)"
             },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: "https://cdn.glitch.com/cc5cfeaf-3c95-481a-afcf-26c54f04bd11%2F1496175220emoji-android-party-popper.png?1531870031637",
      text: "© Community Of People Dev"
    }
  }
});
    }
};