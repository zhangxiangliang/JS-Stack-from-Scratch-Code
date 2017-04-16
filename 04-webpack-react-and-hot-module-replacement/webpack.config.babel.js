// @flow
import path from 'path'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

export default {
    entry: [
        './src/client',
    ],
}
