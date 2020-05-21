import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Form } from 'redux-form'
import { RFInput, RFComponent } from './RFInputs'

//helpers
import { isEmpty } from './../../util/helpers'
import {
  maxLength15,
  required,
  minLength2,
  alphaNumeric
} from './../../util/inputsHelpers'

function FormExample({
  handleSubmit,
  pristine,
  submitting,
  initialValues,
  reset,
  ...props
}) {
  // method to use to create or update
  function handleClickSubmit(values) {
    debugger
    if (values.edit) {
      console.log('Update values')
    } else {
      console.log('Create a new record')
      console.log({ values })
      debugger
    }
    //props.reset()
  }

  return (
    <Form onSubmit={handleSubmit(handleClickSubmit)}>
      <RFInput
        name="textField"
        type="text"
        component="input"
        placeholder="Username"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />

      <br />

      <RFInput
        name="checkBox"
        type="checkbox"
        component="input"
        validate={[required]}
      />

      <br />

      <RFInput name="radio" type="radio" component="input" validate={[required]} />

      <br />

      <RFComponent
        name="textarea"
        type="textarea"
        component="textarea"
        validate={[required, minLength2]}
        warn={alphaNumeric}
      />

      <br />

      <RFComponent name="select" component="select" validate={[required]}>
        <option></option>
        <option value="1">Select a color...</option>
        <option value="2">Select a color 2...</option>
      </RFComponent>

      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </Form>
  )
}

const mapStateToProps = state => ({
  initialValues: {
    edit: false,
    textField: 'this is how we do',

    checkBox: false,
    radio: false,
    select: [
      { id: 1, value: 'alex' },
      { id: 2, value: 'rosario' },
      { id: 3, value: 'nancy' }
    ],
    multiSelect: [
      { id: 1, value: 'javascript' },
      { id: 2, value: 'python' },
      { id: 3, value: 'php' },
      { id: 4, value: 'sql' }
    ]
  }
})

const mapDispatchToProps = {}

const RFName = reduxForm({
  form: 'formExample',
  enableReinitialize: true
})(FormExample)
export default connect(mapStateToProps, mapDispatchToProps)(RFName)
