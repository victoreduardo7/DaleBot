const PersonBot = require('./person-bot.js');

class DanielBot extends PersonBot {
    getPhrases() {
        return [
            "Ela é uma cachorra essa menina",
            "Ah não cara, mais um trailer merda",
            "O Luan Santana falou que somos todos macacos",
            "Esse corte foi maneiro",
            "Baby vai ser carrasco com a filha dele",
            "O pior da guerra e não comer uma bucetinha"
        ];
    }

    getCommandIdentifier() {
        return "daniel"
    }

    getImage() {
        return "https://discord.com/assets/322c936a8c8be1b803cd94861bdfa868.png"
    }

    getName() {
        return "danbaratheon"
    }
}

module.exports = DanielBot