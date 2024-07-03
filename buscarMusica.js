function buscarMusica(callback) {
    rl.question('Digite o nome da música que deseja buscar: ', (nomeBusca) => {
        let encontradas = [];
        playlists.forEach(playlist => {
            encontradas = encontradas.concat(playlist.musicas.filter(musica => musica.nome.toLowerCase().includes(nomeBusca.toLowerCase())));
        });
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
        callback();
    });
}

module.exports = { buscarMusica };
