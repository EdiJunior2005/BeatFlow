const express = require("express");
const router = express.Router()
const musicaController = require("../controllers/musica") 

router.get("/", musicaController.listarMusicas)
router.post("/", musicaController.criarMusica)
router.delete("/:id", musicaController.deletarMusica)
router.put("/:id", musicaController.atualizarMusica)

module.exports = router