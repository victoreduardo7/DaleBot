const auth = require('./auth.json');

const dales = [
    "Não, ô arrombado",
    "Sim sim. É ele mesmo. Sim. Isso, Igor. Não, é isso aí.",
    "Cara de safada, espera a risadinha dela",
    "Só assisto filme mais novo que eu",
    "Você levanto eu tive que cortar",
    "Na lua cê caga menos",
    "Subiu como uma criança desceu como um homem",
    "Albionzada?",
    "Dale"
]

class DaleBabyBot {
    get authToken() {
        return auth.token
    }

    handleStart(event) {
        console.log('Connected');
        console.log('Albionzada?');
    }

    handleMessage(message) {
        console.log("mensagem recebida");

        const content = message.content;

        if (content.substring(0, 1) == '!') {
            var args = content.substring(1).split(' ');
            const cmd = args[0];

            args = args.splice(1);
            switch (cmd) {
                case 'dale':
                    const tts = args.includes("tts");
                    var novoDale = dales[Math.floor(Math.random() * dales.length)];
                    message.channel.send(novoDale, { tts: tts })
                    break;
            }
        }
    }

    // handleDale(message, args) {
    //     console.log(args);
    //     const tts = args.contains("tts");
    //     this.sendMessage(message, true);
    // }

    // sendMessage(message, tts) {
    //     var novoDale = dales[Math.floor(Math.random() * dales.length)];
    //     message.channel.send(novoDale, { tts: tts })
    // }
}

module.exports = DaleBabyBot