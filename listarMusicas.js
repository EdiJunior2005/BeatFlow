const { selecionarPlaylist } = require('./selecionarPlaylist');

function listarMusicas(callback) {
    selecionarPlaylist((playlist) => {
        if (playlist.musicas.length === 0) {
            console.log('Nenhuma música na playlist.');
        } else {
            console.log('Listagem de músicas:');
            playlist.musicas.forEach((musica, index) => {
                console.log(`
                ${index + 1}. Nome: ${musica.nome}
                   Ano: ${musica.ano}
                   Artista: ${musica.artista}
                   Gênero: ${musica.genero}
                   Álbum: ${musica.album}
                   Duração: ${musica.duracao} minutos
                `);
            });
        }
        callback();
    });
}

module.exports = { listarMusicas };
