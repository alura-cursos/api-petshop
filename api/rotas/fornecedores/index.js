const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')

roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaFornecedor.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (requisicao, resposta) => {
    const dadosRecebidos = requisicao.body
    const fornecedor = new Fornecedor(dadosRecebidos)
    await fornecedor.criar()
    resposta.send(
        JSON.stringify(fornecedor)
    )
})

roteador.get('/:idFornecedor', async (requisicao, resposta) => {
    try {
        const id = requisicao.params.idFornecedor
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.carregar()
        resposta.send(
            JSON.stringify(fornecedor)
        )
    } catch (erro) {
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.put('/:idFornecedor', async (requisicao, resposta) => {
    try {
        const id = requisicao.params.idFornecedor
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos, { id: id })
        const fornecedor = new Fornecedor(dados)
        await fornecedor.atualizar()
        resposta.end()
    } catch (erro) {
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

module.exports = roteador