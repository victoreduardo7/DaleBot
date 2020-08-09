const Bot = require('../bot.js');

class InstantsBot extends Bot {
    getCommandIdentifier() {
        return "instant"
    }

    instantSearchQuery(args) {
        return args[0];
    }

    findInstants(message, args) {
        const query = this.instantSearchQuery(args);
        if (query == null) {
            return
        }

        var that = this;
        var request = require("request");
        request({ uri: "https://www.myinstants.com/search/?name=" + query },
            function (error, response, body) {
                that.parseHTMLfirstResult(body, message);
            }
        );
    }

    parseHTMLfirstResult(body, message) {
        if (body == null) {
            return
        }

        const pattern = /onmousedown="play\('(.*?)'\)"/g;
        const results = body.match(pattern);
        this.sendVoiceMessage(message, results[0]);
    }

    sendVoiceMessage(message, instant) {
        var pattern = /onmousedown="play\('/;
        var name = instant.replace(pattern);
        pattern = /'\)"/;
        // There is a better way to handle that. I need better reg exp
        name = name.replace(pattern);
        name = name.replace('undefined');
        name = name.replace('undefined', '');
        name = name.replace('undefined', '');

        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('https://www.myinstants.com' + name);
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
    }
}

module.exports = InstantsBot