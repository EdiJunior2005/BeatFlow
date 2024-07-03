function criarPlaylist(callback) {
    rl.question('Digite o nome da playlist: ', (nome) => {
        playlists.push({ nome, musicas: [] });
        console.log(`Playlist '${nome}' criada com sucesso!`);
        callback();
    });
}

module.exports = { criarPlaylist };
