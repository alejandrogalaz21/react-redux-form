import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

function FormExample() {
  return <div></div>
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

const RFName = reduxForm({ form: 'formExample' })(FormExample)
export default connect(mapStateToProps, mapDispatchToProps)(RFName)
