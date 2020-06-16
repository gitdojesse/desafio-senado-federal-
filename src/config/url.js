export default {
    parlamentares: `http://legis.senado.leg.br/dadosabertos/senador/lista/atual.json`,
    comissoes: (codigoDoParlamentar) => `http://legis.senado.leg.br/dadosabertos/senador/${codigoDoParlamentar}/comissoes.json`
}