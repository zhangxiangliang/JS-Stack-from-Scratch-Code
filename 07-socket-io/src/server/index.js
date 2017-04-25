// @flow
import express from 'express'
import { Server } from 'http'
import socketIO from 'socket.io'

import setUpSocket from './socket'
import renderApp from './render-app'

const app = express()
const http = Server(app)
const io = socketIO(http)
setUpSocket(io)

app.get('/', (req, res) => res.send(renderApp()))
http.listen(8000, () => console.log('Server running on port 8000'))
