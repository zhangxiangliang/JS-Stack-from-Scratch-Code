// @flow

import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({ label: 'Say helo' })

const mapDispatchToProps = dispatch => ({
    handleClick: () => dispatch(sayHello('Hola!'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)

