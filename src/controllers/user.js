const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const gerarToken = (user) => {
    return jwt.sign({ username: user.username }, process.env.SECRET_KEY, { expiresIn: "1h" });
};

const signup = async (req, res)=> {
    const { username, password } = req.body;

    const userExiste = await User.findOne({username})
    if (userExiste) {
        return res.status(400).json('usuario existente!')
    }
    const senhaDecodificada = await bcrypt.hash(password, 10);
    const user = new User({username, password: senhaDecodificada})
    await user.save();

    res.status(201).json({mensagem: 'usuario criado com sucesso'})
}

const login = async (req, res)=>{
    const { username, password } = req.body;

    const user = await User.findOne({username});
    if (!user) {
        res.status(401).json({mensagem: 'usuario ou senha invalidos!'})
    }
    const correto = await bcrypt.compare(username, user.password)
    if (!correto) {
        res.status(402).json({mensagem: 'usuario ou senha errados'})
    }
    const token = gerarToken(user)
    res.status(201).json({ token })
}
module.exports = { signup, login }