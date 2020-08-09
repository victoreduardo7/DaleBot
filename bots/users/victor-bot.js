const PersonBot = require('./person-bot.js');

class VictorBot extends PersonBot {
    getPhrases() {
        return [
            "Agora só como cu de curioso"
        ];
    }

    getCommandIdentifier() {
        return "victor"
    }

    getImage() {
        return "https://cdn.discordapp.com/avatars/273241024430866432/1d142a358621618a3978a839ae3d1907.png"
    }

    getName() {
        return "Victor Eduardo"
    }
}

module.exports = VictorBot