const Musica = require("../models/Musicas")

async function criarMusica(req,res) {
  const { nome, ano, artista, genero, album, duracao, idPlaylist } = req.body;
  try {
    const novaMusica = new Musica({
      nome,
      ano,
      artista,
      genero,
      album,
      duracao,
      idPlaylist,
    });
    const musicaSalva =  await novaMusica.save();
    res
        .status(201)
        .json({ 
          mensagem: "Música criada com sucesso", 
          musica: musicaSalva 
        });
    } catch (erro) {
    res
        .status(500)
        .json({ mensagem: "Erro ao criar música", erro: erro.mensagem });
  }
}
async function deletarMusica(req, res) {
  const { id } = req.params;
  try {
    const musicaDeletada = await Musica.findByIdAndDelete(id);
  if (musicaDeletada) {
    res.status(200)
        .json({ mensagem: "musica deletado com sucesso", musica: musicaDeletada });
} else {
    res.status(404).json({ mensagem: "musica não encontrado" });
}
} catch (error) {
res.status(500)
    .json({ mensagem: "Erro ao deletar a musica", erro: error.message });
}
}
async function atualizarMusica(req,res) {
  const { id } = req.params;
  const { nome, ano, artista, genero, album, duracao, idPlaylist } = req.body;
  try {
    const musicaAtualizada = await Musica.findByIdAndUpdate(
      id,
      { nome, ano, artista, genero, album, duracao, idPlaylist },
      { new: true, runValidators: true }
    );
    if (musicaAtualizada) {
      res.status(200)
          .json({
              mensagem: "Música atualizada com sucesso",
              musica: musicaAtualizada,
          });
  } else {
      res.status(404).json({ mensagem: "Música não encontrada" });
  }
} catch (erro) {
  res.status(500)
      .json({ mensagem: "Erro ao atualizar música", erro: erro.mensagem });
}
}
async function listarMusicas(req,res) {
  try {
    const musicas = await Musica.find();
    res.status(200).send(musicas)
  } catch (error) {
    console.error("Erro ao obter musicas:", error);
    throw error;
  }
}
module.exports = {
    criarMusica,
    atualizarMusica,
    listarMusicas,
    deletarMusica
}