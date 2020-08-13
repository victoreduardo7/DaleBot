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
    
    getName() {
        return "JoaoV"
    }
}

module.exports = JoaoBot