// @flow

import React from 'react'
import HelloButton from './container/hello-button'
import HolaButton from './container/hola-button'
import HelloAsyncButton from './container/hello-async-button'
import Message from './container/message'
import MessageAsync from './container/message-async'
import { APP_NAME } from '../shared/config'

const App = () =>
    <div>
        <h1>{ APP_NAME }</h1>
        <Message />
        <HelloButton />
        <HolaButton />
        <MessageAsync />
        <HelloAsyncButton />
    </div>
export default App
