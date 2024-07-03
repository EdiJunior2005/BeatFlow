const readline = require('readline');
const { exibirMenu } = require('./menu');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

global.playlists = [];
global.rl = rl;

exibirMenu();
