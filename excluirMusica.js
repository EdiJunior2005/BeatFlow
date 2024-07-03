const { selecionarPlaylist } = require('./selecionarPlaylist');

function excluirMusica(callback) {
    selecionarPlaylist((playlist) => {
        if (playlist.musicas.length === 0) {
            console.log('Nenhuma música na playlist.');
            callback();
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
            rl.question('Digite o número da música que deseja excluir: ', (numero) => {
                const index = parseInt(numero) - 1;
                if (index >= 0 && index < playlist.musicas.length) {
                    playlist.musicas.splice(index, 1);
                    console.log('Música excluída com sucesso!');
                } else {
                    console.log('Número de música inválido.');
                }
                callback();
            });
        }
    });
}

module.exports = { excluirMusica };
