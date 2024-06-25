const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let playlist = [];

function exibirMenu() {
    console.log(`
    1. Criar uma playlist
    2. Inserir música
    3. Alterar música
    4. Excluir música
    5. Listar músicas
    6. Buscar música
    7. Sair
    `);
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                criarPlaylist();
                break;
            case '2':
                inserirMusica();
                break;
            case '3':
                alterarMusica();
                break;
            case '4':
                excluirMusica();
                break;
            case '5':
                listarMusicas();
                break;
            case '6':
                buscarMusica();
                break;
            case '7':
                console.log('Saindo...');
                rl.close();
                break;
            default:
                console.log('Opção inválida, tente novamente.');
                exibirMenu();
                break;
        }
    });
}

function criarPlaylist() {
    rl.question('Digite o nome da playlist: ', (nome) => {
        playlist = { nome, musicas: [] };
        console.log(`Playlist '${nome}' criada com sucesso!`);
        exibirMenu();
    });
}

function inserirMusica() {
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
                            exibirMenu();
                        });
                    });
                });
            });
        });
    });
}

function alterarMusica() {
    console.log('Listagem de músicas:');
        playlist.musicas.forEach((musica, index) => {
            console.log(`
            ${index + 1}. Nome: ${musica.nome}
               Ano: ${musica.ano}
               Artista: ${musica.artista}
               Gênero: ${musica.genero}
               Álbum: ${musica.album}
               Duração: ${musica.duracao} minutos
            `)
        })
    if (playlist.musicas.length === 0) {
        console.log('Nenhuma música na playlist.');
        exibirMenu();
    } else {
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
                                        exibirMenu();
                                    });
                                });
                            });
                        });
                    });
                });
            } else {
                console.log('Número de música inválido.');
                exibirMenu();
            }
        });
    }
}

function excluirMusica() {
    console.log('Listagem de músicas:');
        playlist.musicas.forEach((musica, index) => {
            console.log(`
            ${index + 1}. Nome: ${musica.nome}
               Ano: ${musica.ano}
               Artista: ${musica.artista}
               Gênero: ${musica.genero}
               Álbum: ${musica.album}
               Duração: ${musica.duracao} minutos
            `)
        })
    if (playlist.musicas.length === 0) {
        console.log('Nenhuma música na playlist.');
        exibirMenu();
    } else {
        rl.question('Digite o número da música que deseja excluir: ', (numero) => {
            const index = parseInt(numero) - 1;
            if (index >= 0 && index < playlist.musicas.length) {
                playlist.musicas.splice(index, 1);
                console.log('Música excluída com sucesso!');
            } else {
                console.log('Número de música inválido.');
            }
            exibirMenu();
        });
    }
}

function listarMusicas() {
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
            `)
        })
    }
    exibirMenu();
}

function buscarMusica() {
    rl.question('Digite o nome da música que deseja buscar: ', (nomeBusca) => {
        const encontradas = playlist.musicas.filter(musica => musica.nome.toLowerCase().includes(nomeBusca.toLowerCase()));
        if (encontradas.length > 0) {
            console.log('Músicas encontradas:');
            encontradas.forEach(musica => {
                console.log(`
                Nome: ${musica.nome}
                Ano: ${musica.ano}
                Artista: ${musica.artista}
                Gênero: ${musica.genero}
                Álbum: ${musica.album}
                Duração: ${musica.duracao} minutos
                `);
            });
        } else {
            console.log(`Nenhuma música encontrada com o nome '${nomeBusca}'.`);
        }
        exibirMenu();
    });
}

exibirMenu();
