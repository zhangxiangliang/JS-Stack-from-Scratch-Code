var Immutable = require('Immutable')

const obj = Immutable.Map({
    name: 'Stan',
    friends: ['Kyle', 'Cartman', 'Kenny']
})

const immutablePerson = Immutable.fromJS({
    name: 'Stan',
    friends: ['Kyle', 'Cartman', 'Kenny']
})

console.log(obj);
console.log(immutablePerson);
