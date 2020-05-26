import React from 'react'
import { Field } from 'redux-form'
import { Radio } from './RFRadio'
import { Input } from './RFInput'
import { Select, SelectAsync } from './RFSelect'

// WRAPPERS
export const RenderInput = Input => ({ meta, ...props }) => (
  <div>
    <label htmlFor={props.id}>
      <strong>{props.label}</strong>
    </label>
    <Input {...props} />
    {meta.touched &&
      ((meta.error && <span className="text-danger">{meta.error}</span>) ||
        (meta.warning && <span className="text-warning">{meta.warning}</span>))}
    <br />
  </div>
)

export const RFFieldWrapper = Component => props => {
  const Input = RenderInput(Component)
  return <Field {...props} component={Input} />
}

// INPUT CONNECTED COMPONENTS
export const RFInput = props => RFFieldWrapper(Input)(props)
export const RFRadio = props => RFFieldWrapper(Radio)(props)
export const RFSelect = props => RFFieldWrapper(Select)(props)
export const RFSelectAsync = props => RFFieldWrapper(SelectAsync)(props)
