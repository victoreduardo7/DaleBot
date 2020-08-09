const PersonBot = require('./person-bot.js');

class JoaoBot extends PersonBot {
    getPhrases() {
        return [
            "Essa idade fazendo isso é mole", 
            "Foda é quando você sofre um acidente e o médico tem que rasgar a roupa",
            "esse dai conhece varios paus"
        ];
    }

    getCommandIdentifier() {
        return "joao"
    }

    getImage() {
        return "https://cdn.discordapp.com/avatars/254705868359204864/f778356c8411921d42b38112f7ec678a.png"
    }

    getName() {
        return "JoaoV"
    }
}

module.exports = JoaoBot