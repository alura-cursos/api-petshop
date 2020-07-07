const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')

roteador.use('/', async (requisicao, resposta) => {
    const resultados = await TabelaFornecedor.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})

module.exports = roteador