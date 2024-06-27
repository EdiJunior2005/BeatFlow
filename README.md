# BeatFlow 
Esse é um programa simples em Node.js. Ele permite criar playlist, insirir, alterar, listar e buscar musicas, interagindo com o usuário pelo terminal.

## Estrutura do código

### Modulos e Variáveis:
- `readline`: Módulo usado para ler a entrada do usuário no teminal.
- `rl`:  interface criada para ler e escrever no terminal.
- `playlists`: Array criado para armazenar as playlists criadas, onde cada uma das playlist contem o objeto musica, contendo as propriedades: `nome da musica`, `ano de publicação`, `artista`, `genêro musical`, `album da musica escolhida`, `duração de cada musica em minutos`.

### Funções Principais:

1. `readline`: Importa o modulo readline, que permite a interação do usuario com a linha de comando. E a interface readline, que permite a leitura da entrada do usuario e a escrever as saidas no terminal
````bash 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
````
2. `playlists`: Array criado para armazenar as playlists criadas e as musicas inseridas, que inicialmente está vazia.
````bash
let playlists = []
````
3. `exibirMenu()`: Função principal para exibir as opções ao usuario, o **switch case** var chamar a função escolhida.

````bash
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
````

4. `criarPlaylist()`: Função responsavel de criar playlist. Inicilizando uma playlist com o nome escolhido, e no fim exibindo a mensagem que a playlist foi criada com sucesso.
````bash
function criarPlaylist() {
    rl.question('Digite o nome da playlist: ', (nome) => {
        playlist = { nome, musicas: [] };
        console.log(`Playlist '${nome}' criada com sucesso!`);
        exibirMenu();
    )}
````
5. `inserirMusica()`: Permite ao usuario inserir a musica que ele deseja na playlist. Perguntando inicialmente o nome, ano da musica, o artista, genêro, album e duração da musica. Se os dados forem validos, a musica será adicionada a playlist e uma mensagem dizendo que foi adicionada com sucesso.
````bash
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
    )};
}
````
6. `alterarMusica()`: Possibilita que o usuario edite uma musica já adicionada na playlist.
````bash
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
````
7. `excluirMusica()`: Exclui a musica que o usuario escolher. Primeiramente ele irá lista rqueias musicas estão adicionadas a playlist e em seguidas pedir para o usuario selencionar qual musica ele deseja excluir.
````bash
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
````
8. `listarMusica()`: Lista as musica já adicionadas.
````bash
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
````
9. `buscarMusica()`: Permite buscar as musicas pelo nome.
````bash
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
````
10. `selecionarPlaylist()`: Permite buscar a playlist que você quer alterar.
````bash
function selecionarPlaylist(callback) {
    if (playlists.length === 0) {
        console.log('Nenhuma playlist disponível. Crie uma nova playlist primeiro.')
        exibirMenu()
        return
    }
    console.log('Listagem de playlists:')
    playlists.forEach((playlist, index) => {
        console.log(`${index + 1}. ${playlist.nome}`)
    })
    rl.question('Digite o número da playlist desejada: ', (numero) => {
        const index = parseInt(numero) - 1
        if (index >= 0 && index < playlists.length) {
            callback(playlists[index])
        } else {
            console.log('Número de playlist inválido.')
            exibirMenu()
        }
    });
}

````
### Decições de Desing:
- **Interface Simples**: A interface é baseada em texto, ou seja, simples e facil de usar e entender.
- **Validação Básica**: Verica se a entrada do usuário é válida (por exemplo, se a musica ja foi adicionada na playlist) antes de realizar qualquer função.

## Utilização do Sistema

### Requisitos:

### Execução:
1. Clone o repositório ou copie o codigo para um arquivo `index.js`.
2. No terminal, navegue até o doretório onde o arqivo está localizado.
3. Execute o programa com o comando:
    ````bash 
    node index.js
    ````
