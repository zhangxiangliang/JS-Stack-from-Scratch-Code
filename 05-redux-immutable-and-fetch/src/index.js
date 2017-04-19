var Immutable = require('Immutable')

const obj = Immutable.Map({ a: 1 })
console.log(obj.set('a', 2))
