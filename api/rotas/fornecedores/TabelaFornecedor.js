const Modelo = require('./ModeloTabelaFornecedor')

module.exports = {
    listar () {
        return Modelo.findAll()
    },
    inserir (fornecedor) {
        return Modelo.create(fornecedor)
    }
}