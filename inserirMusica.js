const { selecionarPlaylist } = require('./selecionarPlaylist');

function inserirMusica(callback) {
    selecionarPlaylist((playlist) => {
        rl.question('Digite o nome da música: ', (nome) => {
            rl.question('Qual o ano da música: ', (ano) => {
                rl.question('Qual o nome do artista: ', (artista) => {
                    rl.question('Qual o gênero musical: ', (genero) => {
                        rl.question('Qual o álbum da música: ', (album) => {
                            rl.question('Qual a duração da música (em minutos): ', (duracao) => {
                                playlist.musicas.push({
                                    nome,
                                    ano: parseInt(ano),
                                    artista,
                                    genero,
                                    album,
                                    duracao: parseFloat(duracao)
                                });
                                console.log('Música inserida com sucesso!');
                                callback();
                            });
                        });
                    });
                });
            });
        });
    });
}

module.exports = { inserirMusica };
