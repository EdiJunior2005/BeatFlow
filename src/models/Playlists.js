const mongoose = require("mongoose")

const esquemaPlaylist = new mongoose.Schema({
    nome: { type: String, required: true },
})
const Playlist = mongoose.model("Playlist", esquemaPlaylist)

module.exports = Playlist