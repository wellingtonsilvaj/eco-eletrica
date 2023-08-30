//incluir as bibliotecas
//gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');

//utilizado para manipular as rotas da aplicação
const router = express.Router();

//criar rota pagina inicial
router.get('/', (req, res) => {
    res.render("admin/dashboard/dashboard", { layout: 'main'});
});

//exportar a instrução que está dentro da constante router
module.exports = router;