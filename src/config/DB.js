const mongoose = require("mongoose");

const conect_mongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('conectado ao mongo') 
  } catch (error) {
    console.log({erro: error, mensagem: "erro ao conectar ao mongo"})
  }
};
module.exports = conect_mongoose;
