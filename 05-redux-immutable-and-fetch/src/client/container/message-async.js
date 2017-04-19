// @flow

import { connect } from 'react-redux'

import Message from '../component/message'

const mapStateToProps = state => ({ message: state.hello.get('messageAsync') })

export default connect(mapStateToProps)(Message)
