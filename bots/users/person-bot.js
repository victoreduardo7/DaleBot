const Bot = require('../bot.js');

class PersonBot extends Bot {
    getPhrases() {
        return []
    }

    getImage() {
        ""
    }

    getName() {
        ""
    }

    sendRandomMessage(client, message, args) {
        var items = this.getPhrases();
        var newMessage = items[Math.floor(Math.random() * items.length)];

        client.user.setAvatar(this.getImage())
                    .then(user => { client.user.setUsername(this.getName()) })
                    .then(user => { message.channel.send(newMessage, this.formatOptions(args)) })
                    .catch(err => { console.log('Error on sending message', err) });
    }

    formatOptions(args) {
        const tts = args.includes("tts");
        return {tts: tts};
    }
}

module.exports = PersonBot