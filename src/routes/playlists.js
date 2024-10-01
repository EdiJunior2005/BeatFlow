const express = require("express");
const router = express.Router()
const playlistController = require("../controllers/playlist"); 
const { verificarToken } = require("../middlewares/verificacao");

router.use(verificarToken)
router.get("/", playlistController.obterPlaylist)
router.post("/", playlistController.criarPlaylists)
router.delete("/:id", playlistController.deletarPlaylist)
router.put("/:id", playlistController.atualizarPlaylist)

module.exports = router