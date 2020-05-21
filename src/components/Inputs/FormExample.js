import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Form } from 'redux-form'
import { RFInput, RFRadio, RFSelect } from './RFFields'

import {
  maxLength15,
  required,
  minLength2,
  alphanumeric
} from './../../util/inputsHelpers'

function FormExample({ handleSubmit, pristine, submitting, reset }) {
  // method to create or update
  function handleClickSubmit(values) {
    console.log({ values })
    if (values.edit) {
      console.log('Update values')
    } else {
      console.log('Create a new record')
      console.log({ values })
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleClickSubmit)} className="form-example">
      <RFInput
        name="name"
        type="text"
        label="Nombre completo"
        warn={alphanumeric}
        validate={[required, maxLength15, minLength2]}
      />

      <RFRadio
        name="gender"
        label="Género"
        options={[
          { id: 'gender-male', label: 'Masculino', value: 'M' },
          { id: 'gender-female', label: 'Femenino', value: 'F' }
        ]}
      />

      <RFInput
        name="comment"
        type="textarea"
        label="Comentario"
        warn={alphanumeric}
        validate={[required, minLength2]}
      />

      <RFSelect
        name="university"
        label="Universidad"
        options={[
          { value: 'ITESM', label: 'Tecnológico de Monterrey' },
          { value: 'UDEM', label: 'Universidad de Monterrey' },
          { value: 'UAM', label: 'Universidad Autonoma de México' }
        ]}
        warn={alphanumeric}
        validate={[required, minLength2]}
      />

      <div>
        <button type="submit" disabled={submitting}>
          Enviar
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Reestablecer valores
        </button>
      </div>
    </Form>
  )
}

const mapStateToProps = state => ({
  initialValues: {
    edit: false,
    name: 'Rosa Mendoza Fox',
    gender: 'F',
    university: 'UDEM'
  }
})

const mapDispatchToProps = {}

const RFUser = reduxForm({
  form: 'formExample',
  enableReinitialize: true
})(FormExample)

export default connect(mapStateToProps, mapDispatchToProps)(RFUser)
