const express = require("express")
const app = express()
const musicaRoutes = require("./src/routes/musicas")
const playlistRoutes = require("./src/routes/playlists")

app.use(express.json())
app.use("/musicas", musicaRoutes)
app.use("/playlists", playlistRoutes)

module.exports = app