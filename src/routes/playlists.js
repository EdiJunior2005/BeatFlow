const express = require("express");
const router = express.Router()
const playlistController = require("../controllers/playlist") 

router.get("/", playlistController.obterPlaylist)
router.post("/", playlistController.criarPlaylists)
router.delete("/:id", playlistController.deletarPlaylist)
router.put("/:id", playlistController.atualizarPlaylist)

module.exports = router