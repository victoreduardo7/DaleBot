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

    getName() {
        return "Victor Eduardo"
    }
}

module.exports = VictorBot