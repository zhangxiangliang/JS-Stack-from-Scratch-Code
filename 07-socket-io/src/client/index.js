// @flow
import 'babel-polyfill'

import { createStore } from 'redux'
import setUpSocket from './socket'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}

const store = createStore(todos)

setUpSocket(store)
