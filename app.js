//incluir o arquivo com as variaveis de ambiente
require('dotenv').config();
//incluir as bibliotecas
//gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');

//handlebars é um processador de templates que gera a página html de forma dinamica
const { engine } = require('express-handlebars');
// Incluir o módulo para gerenciar diretorios e caminhos
const path = require("path");
//chamar função express
const app = express();

//definir qual templete será utilizado
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//local dos arquivos estaticos
app.use(express.static(path.join(__dirname,"public")));

//incluir controllers
const home = require('./controllers/home');
const login = require('./controllers/login');
const dashboard = require('./controllers/dashboard');

//indicar a rota de acesso
app.use('/', home);
app.use('/login', login);
app.use('/dashboard', dashboard);

//iniciar o servidor na porta 8080
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});