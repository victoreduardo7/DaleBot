const dotenv = require('dotenv');

const dales = [
    "Não, ô arrombado",
    "Sim sim. É ele mesmo. Sim. Isso, Igor. Não, é isso aí.",
    "Cara de safada, espera a risadinha dela",
    "Só assisto filme mais novo que eu",
    "Você levantou eu tive que cortar",
    "Na lua cê caga menos",
    "Subiu como uma criança desceu como um homem",
    "Albionzada?",
    "Dale",
    "Bota em HD aí",
    "É porque eu sou o brabo",
    "É a Taylor?",
    "Galera tá passiva agressiva",
    "Serve para que leis existem? Para ser quebradas",
    "Bota a tela cheia, quero me sentir no cinema",
    "Pelo menos não tem bicha, né?"
]

const pandoras = [
    "Pandora?",
    "Ô Rafa hoje eu vou assistir aqui não dá não",
    "Vai tomar no cu",
    "Não to rindo não",
    "Ah vai tomar no cu, Sev",
    "Não consegue ficar um segundo sério, porra",
    "Vou esquentar a água aqui peraí",
    "Porra, essa boca no bot também viado",
    "É o cheiro da camomila",
    "Alou"
]

const johns = ["Essa idade fazendo isso é mole"]

class DaleBabyBot {
    get authToken() {
        dotenv.config();
        return process.env.DISCORD_AUTH_TOKEN
    }

    handleStart() {
        console.log('Connected');
    }

    handleMessage(message, client) {
        console.log("mensagem recebida");

        const content = message.content;


        "asdsad asd asd sd asd"

        if (content.substring(0, 1) == '!') {
            var args = content.substring(1).split(' ');
            const cmd = args[0];

            args = args.splice(1);
            const tts = args.includes("tts");
            switch (cmd) {
                case 'dale':
                    var novoDale = dales[Math.floor(Math.random() * dales.length)];
                    message.channel.send(novoDale, { tts: tts });
                    break;
                case 'rafa':
                    var novo = pandoras[Math.floor(Math.random() * pandoras.length)];
                    message.channel.send(novo, { tts: tts });
                    break 
                case 'dev':
                    client.user.setAvatar('https://cdn.discordapp.com/avatars/204936159325978627/1819fe42aad29bcc94853a1eeabc9f3c.png')
                        .then(user => { client.user.setUsername("teste da carol"); console.log('New Avatar set!'); })
                        .then(user => { message.channel.send('✔ Operation successful'); console.log('New Name set!'); })
                    .catch((err) => { message.channel.send('× Operation failed'); console.log('Error on setavatar command:', err); });
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