class ValorNaoSuportado extends Error {
    constructor (contentType) {
        super(`O tipo de conteúdo ${contentType} não é suportado`)
        this.name = 'ValorNaoSuportado'
        this.idErro = 3
    }
}

module.exports = ValorNaoSuportado