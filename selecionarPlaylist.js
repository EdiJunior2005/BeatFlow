function selecionarPlaylist(callback) {
    if (playlists.length === 0) {
        console.log('Nenhuma playlist disponível. Crie uma nova playlist primeiro.');
        callback();
        return;
    }
    console.log('Listagem de playlists:');
    playlists.forEach((playlist, index) => {
        console.log(`${index + 1}. ${playlist.nome}`);
    });
    rl.question('Digite o número da playlist desejada: ', (numero) => {
        const index = parseInt(numero) - 1;
        if (index >= 0 && index < playlists.length) {
            callback(playlists[index]);
        } else {
            console.log('Número de playlist inválido.');
            callback();
        }
    });
}

module.exports = { selecionarPlaylist };