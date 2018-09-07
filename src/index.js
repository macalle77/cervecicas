const cervezas = require('./cervezas.json')
const aleatorio = require('unique-random-array')
module.exports = {
  todas: cervezas,
  alazar: aleatorio(cervezas)
}
