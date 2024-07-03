const { selecionarPlaylist } = require('./selecionarPlaylist');

function alterarMusica(callback) {
    selecionarPlaylist((playlist) => {
        if (playlist.musicas.length === 0) {
            console.log('Nenhuma música na playlist.');
            exibirMenu();
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
            rl.question('Digite o número da música que deseja editar: ', (numero) => {
                const index = parseInt(numero) - 1;
                if (index >= 0 && index < playlist.musicas.length) {
                    rl.question('Digite o novo nome da música: ', (nome) => {
                        rl.question('Digite o novo ano da música: ', (ano) => {
                            rl.question('Digite o novo nome do artista: ', (artista) => {
                                rl.question('Digite o novo gênero musical: ', (genero) => {
                                    rl.question('Digite o novo álbum da música: ', (album) => {
                                        rl.question('Digite a nova duração da música (em minutos): ', (duracao) => {
                                            playlist.musicas[index] = {
                                                nome,
                                                ano: parseInt(ano),
                                                artista,
                                                genero,
                                                album,
                                                duracao: parseFloat(duracao)
                                            };
                                            console.log('Música alterada com sucesso!');
                                            callback();
                                        });
                                    });
                                });
                            });
                        });
                    });
                } else {
                    console.log('Número de música inválido.');
                    callback();
                }
            });
        }
    });
}

module.exports = { alterarMusica };
