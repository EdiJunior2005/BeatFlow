const Playlist = require("../models/Playlists")


async function criarPlaylists(req,res) {
    const { nome } = req.body;
    try {
        const novaPlaylist = new Playlist({ nome });
        const playlistSalva =  await novaPlaylist.save();
        res.status(201)
        .json({ mensagem: "Playlist criada com sucesso", playlist: playlistSalva });
    } catch (erro) {
    res.status(500)
        .json({ mensagem: "Erro ao criar playlist", erro: erro.mensagem });
}
}
async function obterPlaylist(req,res) {
    try {
        const playlist =  await Playlist.find();
        res.status(201).send(playlist)
    } catch (erro) {
        res.status(500).json({mensagem: "erro ao obter playlists", erro: error})
        throw erro;
    }
}
async function atualizarPlaylist(req,res) {
    const { id } = req.params;
    const { nome } = req.body;
    try {
        const playlistAtualizado = await Playlist.findByIdAndUpdate(
            id,
            { nome },
            { new: true, runValidators: true }
        );
        if (playlistAtualizado) {
            res.status(200).json({
                mensagem: "Playlist atualizada com sucesso",
                playlist: playlistAtualizado,
            });
        } else {
            res.status(404).json({ mensagem: "Playlist não encontrada" });
        }
    } catch (erro) {
        res.status(500)
            .json({ mensagem: "Erro ao atualizar playlist", erro: erro.mensagem });
    }
}
async function deletarPlaylist(req,res) {
    const { id } = req.params;
    try {
        const playlistDeletado = await Playlist.findByIdAndDelete(id)
        if (playlistDeletado) {
            res.status(200)
               .json({ mensagem: "Playlist e suas músicas deletadas com sucesso", playlist: playlistDeletado });
        } else {
            res.status(404).json({ mensagem: "Playlist não encontrada" });
        }
    } catch (erro) {
        res.status(500)
           .json({ mensagem: "Erro ao deletar playlist", erro: erro.mensagem });
    }
}
module.exports = {
    criarPlaylists,
    atualizarPlaylist,
    deletarPlaylist,
    obterPlaylist
}