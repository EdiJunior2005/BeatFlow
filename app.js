const express = require("express")
const dotenv = require("dotenv")
const app = express()
const musicaRoutes = require("./src/routes/musicas")
const playlistRoutes = require("./src/routes/playlists")
const conect_mongoose = require("./src/config/DB")
const userRoutes = require("./src/routes/user")

dotenv.config()
conect_mongoose()

app.use(express.json())
app.use("/protegido", userRoutes)
app.use("/musicas", musicaRoutes)
app.use("/playlists", playlistRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT , ()=>{
    console.log(`localhost:${PORT}`)
})