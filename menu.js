const { criarPlaylist } = require('./criarPlaylist');
const { inserirMusica } = require('./inserirMusica');
const { alterarMusica } = require('./alterarMusica');
const { excluirMusica } = require('./excluirMusica');
const { listarMusicas } = require('./listarMusicas');
const { buscarMusica } = require('./buscarMusica');

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
                criarPlaylist(exibirMenu);
                break;
            case '2':
                inserirMusica(exibirMenu);
                break;
            case '3':
                alterarMusica(exibirMenu);
                break;
            case '4':
                excluirMusica(exibirMenu);
                break;
            case '5':
                listarMusicas(exibirMenu);
                break;
            case '6':
                buscarMusica(exibirMenu);
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

module.exports = { exibirMenu };