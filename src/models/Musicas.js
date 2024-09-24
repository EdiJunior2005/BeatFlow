const mongoose = require("mongoose")

const esquemaMusica = new mongoose.Schema({
    nome: { type: String, required: true },
    ano: { type: Number, required: true },
    artista: { type: String, required: true },
    genero: { type: String, required: true },
    album: { type: String, required: true },
    duracao: { type: Number, required: true },
    idPlaylist: { type: String, required: true },
});

const Musica = mongoose.model("Música", esquemaMusica);

module.exports = Musica