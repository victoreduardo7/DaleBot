const Bot = require('../bot.js');
const request = require("request");

class InstantsBot extends Bot {
    getCommandIdentifier() {
        return "instant"
    }

    instantSearchQuery(args) {
        return args.join(" ");
    }

    findInstants(message, args) {
        const query = this.instantSearchQuery(args);
        if (query == null) {
            return
        }
        console.log(query);

        var url = "https://www.myinstants.com/search/?name=" + query.split(" ").join("+");

        console.log(url);

        var that = this;
        request({ uri: url },
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
        this.sendVoiceMessage(message, results);
    }

    sendVoiceMessage(message, instant) {
        if (instant == null) {
            return
        }
        console.log(instant);
        var pattern = /onmousedown="play\('/;
        var name = instant[0].replace(pattern);
        pattern = /'\)"/;
        // There is a better way to handle that. I need better reg exp
        name = name.replace(pattern);
        name = name.replace('undefined');
        name = name.replace('undefined', '');
        name = name.replace('undefined', '');
        console.log(name);

        var voiceChannel = message.member.voice.channel;
        //fazendo teste
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('https://www.myinstants.com' + name);
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
    }
}

module.exports = InstantsBot